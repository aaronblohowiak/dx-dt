msgpack = require("msgpack2");
newId = require("uuid-pure").newId;

var redis = require("redis"),
    q = redis.createClient("6868", "127.0.0.1",  {return_buffers: true});
    q.on("error", function(err){
      console.log("Redis error" + err);
    });

var me = "/workers/"+process.pid.toString()+"/"+newId();

q.lpush("/workers", me);

function rpoplpush(){
  q.rpoplpush("/bulkuploads/pending", me, function(err, data){
    if(err){
      // ??
      console.log("Err:"+JSON.stringify(err));
    }
    if(data){
      console.log("Processing Bulk upload:"+data);
      q.get(data, function(err, bulk){
        if(err){
          //??
          console.log("Err:"+JSON.stringify(err));
        }
        if(bulk){
          console.log("Data:"+bulk);
          console.log("Data:"+JSON.parse(bulk));
        }
      });
    }
  });
}

rpoplpush();
