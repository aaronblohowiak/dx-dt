var Transitive = new (require("transitive"))();

var options = {port:8081};

//boot transitive, compiling everything and creating server 
(function(){
  Transitive.boot(this, options);
})();


if(! ("app" in Transitive)){
  Transitive.app = {};
}

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