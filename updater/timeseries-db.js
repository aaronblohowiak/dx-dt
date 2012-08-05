var redis = require("redis").createClient;

function createClient (settings, cb){
  var client = redis(settings.port, settings.host);
  var state = "unconnected";
    
  client.on("error", function(err){
    client.closing = true;
    client.end();
    if(state == "unconnected"){
      cb(err);
    }
  });

  client.auth(settings.password, function(err, status){
    if(err){        
      state = "auth-error";
      client.closing = true;
      return cb(err);
    }
      
    return cb(null, client);
  });
}

module.exports.createClient = createClient;