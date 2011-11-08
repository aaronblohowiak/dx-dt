fs = require("fs");
path = require("path");
sha1 = require("easyhash")('sha1');

rimraf = require("rimraf");
newId = require("uuid-pure").newId;

var i = 0;

var myJobs = {
  update: function(data, callback) {
    fs.writeFileSync("json-"+i.toString(), JSON.stringify(data));
    i = i + 1;
    if(i > 5){
      process.exit();
    }
    callback();
  },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
};

var dxdtConf = JSON.parse(fs.readFileSync("/etc/dxdt.conf"));
var resqueConf = dxdtConf.dbs.workQueue;
// setup a worker
var resque = require('coffee-resque').connect(resqueConf);

worker = resque.worker('snapshots', myJobs);
worker.start();

