var fs = require("fs"),
path = require("path"),
sha1 = require("easyhash")('sha1'),
provision = require("./provision"),
newId = require("uuid-pure").newId,
redis = require("redis").createClient;

var nopt = require("nopt");

var knownOpts = {
  "myhost": [String],
  "dataDir":[String],
  "confPath":[String]
};

var parsed = nopt(knownOpts, {}, process.argv, 2);

//defaults
var myhost = "apbmba.local";
var dataDir = "/timeseries-dbs/data";
var confPath = "/timeseries-dbs/conf";

//overrides
if(parsed.myhost){ myhost = parsed.myhost; }
if(parsed.dataDir){ dataDir = parsed.dataDir; }
if(parsed.confPath){ confPath = parsed.confPath; }

//setup db connections to provisionerdb and work queue

var mydbId = "/databases/hosts/"+myhost;

var conf = JSON.parse(fs.readFileSync("/etc/dxdt.conf"));
var provConf = conf.dbs.provisioner;

var provisionerdb = redis(provConf.port, provConf.host);
provisionerdb.auth(provConf.password);

var resqueConf = conf.dbs.workQueue;
resqueConf.timeout = 250;

var resque = require('coffee-resque').connect(resqueConf);

function createDb(id, cb){
  provisionerdb.hincrby(mydbId, "nextPort", 1, function(err, port){
    if(err) return cb(err);
    
    var password = newId(1001, 62);
    
    provision(id, port, password, dataDir, confPath, function(err, settings){
      if(err) return cb(err);

      settings.host = myhost;
      provisionerdb.hmset("/databases/"+id, settings, function(err, status){
        if(err) return cb(err);
        cb(null, settings);
      });  
    });
  });
}

var provisionWorker = {
  provision: function(data, callback) {
    //what should be in data? the information for how to acknowledge that this redis server exists?
    createDb(data.id, function(err, settings){
      if(err) return callback(new Error(err));
      callback();
      console.log(data, settings);
    });
  },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
};

function initialize(cb){
  provisionerdb.sadd("/databases/hosts", myhost, function(err, status){
    provisionerdb.hget(mydbId, "nextPort", function(err, nextPort){
      if(!nextPort){
        provisionerdb.hset(mydbId, "nextPort", "22222", function(err, status){
          cb();
        });
      }
      cb();
    });
  });
}

initialize(function(){
  // setup a worker
  worker = resque.worker('redis-servers', provisionWorker);
  worker.start();
});
