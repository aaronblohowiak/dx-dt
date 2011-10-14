fs = require("fs");

var redis = require("redis");
spawn = require("child_process").spawn;

u = require("underscore");
u.templateSettings = {
 interpolate : /\{\{(.+?)\}\}/g
};
 
template = u.template(fs.readFileSync("./timeseries-template.u", "utf8"));

function createConfig(settings, cb){
  var config = template(settings);
  fs.writeFile(settings.path, config, "utf8", cb);
}

function createRedisServer(id, port, password, dataDir, confPath, cb){
  var settings = {
    id: id,
    port: port,
    dir: dataDir,
    path: confPath,
    password: password
  };
  
  createConfig(settings, function(err){
    if(err) return cb(err);
    
    startRedis(settings, cb);
  });
}

function startRedis(settings, cb){
  var server = spawn("nohup", ["redis-server", settings.path]);
  server.on("exit", function(code){
    console.log("redis exited with ", code);
    //exits 0 either way =(
    // make this a true child_process, but then we become a supervisor and not just a provisioner.
    // then again, maybe that is OK.
    // nohup'ing it *should* still work.
  });
  
  setTimeout(function(){
    //test server.
    var state = "unconnected";
    var client = redis.createClient(settings.port);
  
    client.on("error", function(err){
      console.log(state, "On ERR: ", err); // loggly?
      client.closing = true;
      client.end();
      //no matter what, freaking out is probably the only reasonable thing to do.
      if(state == "unconnected"){
        cb(err);
      }
    });
    
    client.auth(settings.password, function(err, auth){
      if(err){        
        state = "auth-error";
        client.closing = true;
        cb(err);
      }else{
        client.info(function(err, info){
          if(err){
            client.end();
            console.log("INFO FAIL");
          }else{
            state = "connected";
            cb(null, settings);
            client.end();
          }
        });
      }
    });    
  }, 20);
}

module.exports = createRedisServer;
// createRedisServer(id, port, password, dataDir, confPath, cb)
