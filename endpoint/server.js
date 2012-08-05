var Transitive = new (require("transitive"))();

var options = {};

if(! ("App" in Transitive)){
  Transitive.App = {};
}

var fs = require("fs");
var redis = require("redis").createClient;

var dxdtConf = JSON.parse(fs.readFileSync("/etc/dxdt.conf"));

var provConf = dxdtConf.dbs.provisioner;
var provisions = redis(provConf.port, provConf.host);
provisions.auth(provConf.password);



var resqueConf = dxdtConf.dbs.workQueue;
var resque = require('coffee-resque').connect(resqueConf); //ideally, this would be optional.

Transitive.App.bulkQueue = resque;
Transitive.App.provisions = provisions;

options.port = 444;

if(process.env.NODE_ENV == "production"){
  options.server = Transitive.connect.createServer({
    key: fs.readFileSync('ssl/dxdt.io.key'),
    cert: fs.readFileSync('ssl/dxdt.io.crt'),
    ca: fs.readFileSync('ssl/gd_bundle.crt')
  });
}


//boot transitive, compiling everything and creating server 
(function(){
  Transitive.boot(this, options);
})();


// if(Transitive.options.useS3){
//   Transitive.app.blobStorage = require('noxmox').nox.createClient({
//     key: '<api-key-here>',
//     secret: '<secret-here>',
//     bucket: 'mybucket'
//   });  
// } else {
//   Transitive.app.blobStorage = require('noxmox').mox.createClient({
//     key: '<api-key-here>',
//     secret: '<secret-here>',
//     bucket: 'mybucket'
//   });
// }

console.log("Server started. listening on port " + Transitive.server.address().port);
