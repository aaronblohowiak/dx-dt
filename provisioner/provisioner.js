fs = require("fs");
path = require("path");
sha1 = require("easyhash")('sha1');

newId = require("uuid-pure").newId;

var i = 0;

u = require("underscore");
u.templateSettings = {
 interpolate : /\{\{(.+?)\}\}/g
};
 

// var myJobs = {
//   update: function(data, callback) {
//     
//   },
//   succeed: function(arg, callback) { callback(); },
//   fail: function(arg, callback) { callback(new Error('fail')); }
// };
// 
// // setup a worker
// var resque = require('coffee-resque').connect({
//   host: "127.0.0.1",
//   port: "6868"
// });
// 
// worker = resque.worker('redis-servers', myJobs);
// worker.start();
// 
