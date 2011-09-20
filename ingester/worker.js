msgpack = require("msgpack2");
newId = require("uuid-pure").newId;


var myJobs = {
  ingest: function(data, callback) {
    console.log("a:", data["files"])
    callback(new Error("test"));
    process.exit();
  },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
};

// setup a worker
var worker = require('coffee-resque').connect({
  host: "127.0.0.1",
  port: "6868"
}).worker('bulkuploads', myJobs);

worker.start();