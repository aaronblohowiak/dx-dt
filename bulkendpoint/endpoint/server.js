var Transitive = new (require("transitive"))();

var options = {port:8081};

if(! ("app" in Transitive)){
  Transitive.app = {};
}


var redis = require("redis"),
    client = redis.createClient("6868", "127.0.0.1",  {return_buffers: true});
    client.on("error", function(err){
      console.log("Redis error" + err);
    });

Transitive.app.bulkQueue = client;

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