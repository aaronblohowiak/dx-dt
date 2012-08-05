fs = require("fs");
path = require("path");
exec = require("child_process").exec;

rimraf = require("rimraf");
msgpack = require("msgpack2");
newId = require("uuid-pure").newId;

processDump = require("./process-async");

try{
  fs.mkdirSync("./tmp", "770");
}catch(e){
  if(e.code !== "EEXIST"){
    throw(e);
  }
}

var tmpdir = path.resolve("./tmp");

var myJobs = {
  ingest: function(data, callback) {
    processData(data, callback);
  },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
};


var dxdtConf = JSON.parse(fs.readFileSync("/etc/dxdt.conf"));
var resqueConf = dxdtConf.dbs.workQueue;

// setup a worker
var resque = require('coffee-resque').connect(resqueConf);

worker = resque.worker('bulkuploads', myJobs);
worker.start();

worker = resque.worker('bulkuploads', myJobs);
worker.start();

worker = resque.worker('bulkuploads', myJobs);
worker.start();

function processData(data, callback){
  withExpandedBulk(data.files.bulk, function(err, dirname, container){
    if(err){
      console.log("err", err);
      return callback(err);
    }

    console.log("in expanded bulk")
    processDump(dirname, function(err, results){
      if(err){
        callback(new Error(err));
        process.exit();
      }
      
      data.results = results; //BOOM!
      resque.enqueue("snapshots", "update", [data]);
      rimraf(container, {gently: tmpdir} , function(err){
        console.log("deleting:", dirname);
        console.log("in:", tmpdir);
        console.log(err);
      });
      callback();
    });
  });
}

//processData(JSON.parse(fs.readFileSync("example-data.json", "utf-8")), function(){});

function getFile(dir, fileinfo, cb){
  //CHANGE THIS TO GET FILE FROM MONGO OR S3 OR WHATEVER.
  exec("cp "+fileinfo.path+" "+dir+"/data.tgz", function(err, stdout, stderr){
    cb(err, dir+"/data.tgz");
  });
}

function untarBulk(dir, filename, cb){
  exec("tar -C "+dir+" -xzf "+filename, function(err, stdout, stderr){ if(err) return cb(err);
    fs.readdir(dir, function(err, files){ if(err) return cb(err);
      for (var i = files.length - 1; i >= 0; i--){
        if(files[i].match(/^stats_\d+$/)){
          return cb(null, dir+"/"+files[i]+"/");
        }
      }
      return cb("no stats_ folder found v.v");
    });
  });
}

function withExpandedBulk(fileInfo, cb){
  var dirname = tmpdir+"/"+newId();
  fs.mkdir(dirname, "770", function(err){ if(err) return cb(err);
    getFile(dirname, fileInfo, function(err, filename){ if(err) return cb(err);
      untarBulk(dirname, filename, function(err, finaldir){
        cb(err, finaldir, dirname);
      });
    });
  });
}