var Transitive = new (require("transitive"))();

var options = {port:8081};

if(! ("app" in Transitive)){
  Transitive.app = {};
}


var resque = require('coffee-resque').connect({
  host: "127.0.0.1",
  port: "6868"
});

Transitive.app.bulkQueue = resque;

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