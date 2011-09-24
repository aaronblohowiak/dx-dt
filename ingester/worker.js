msgpack = require("msgpack2");
newId = require("uuid-pure").newId;
fs = require("fs");
processDump = require("./process-async");
exec = require("child_process").exec;

try{
  fs.mkdirSync("./tmp", "770");
}catch(e){
  if(e.code !== "EEXIST"){
    throw(e);
  }
}

var tmpdir = "./tmp";

var myJobs = {
  ingest: function(data, callback) {
    var start = (new Date()).getTime();
    withExpandedBulk(data.files.bulk, function(err, dirname){
      processDump(dirname, function(err, results){
        if(err){
          callback(new Error(err));
          process.exit();
        }
        
        data.results = results; //BOOM!
        data.processingTime = (new Date()).getTime() - start;
        console.log(data.processingTime/1000);
        resque.enqueue("snapshots", "update", [data]);
        callback();
      });
    });
  },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
};

// setup a worker
var resque = require('coffee-resque').connect({
  host: "127.0.0.1",
  port: "6868"
});

worker = resque.worker('bulkuploads', myJobs);

worker.start();

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
          cb(null, dir+"/"+files[i]+"/");
        }
      }
    });
  });
}

function withExpandedBulk(fileInfo, cb){
  var dirname = "./tmp/"+newId();
  fs.mkdir(dirname, "770", function(err){ if(err) return cb(err);
    getFile(dirname, fileInfo, function(err, filename){ if(err) return cb(err);
      untarBulk(dirname, filename, function(err, finaldir){
        cb(err, finaldir);
      });
    });
  });
}