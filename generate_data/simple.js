var redis = require("redis"),
    client = redis.createClient(),
    exec = require("child_process").exec;

client.on("error", function (err) {
    console.log("Error " + err);
});

SECONDS = 86400; // seconds in a day.
FREQUENCY = 5; //every 5 seconds, take a reading.


rand = Math.random;



//client.zadd("sample-data", 0);

value = 0;

cnt = 0
function doIt(){
  child = exec('ping -n -c1 -q dx-dt.com | grep round-trip', function (error, stdout, stderr) {
      var val;
      if(stdout){
        val = parseFloat(stdout.match(/\d+\.\d+/)[0], 10);
        client.zadd("sample-data-ping", (new Date).getTime()/1000, val);
        console.log("added")
      }



      child = exec('ps -o args -o rss -p 13662 | (read; cat)', function(error, stdout, stderr){
        if(stdout){
          val = parseFloat(stdout.match(/\d+\s+([^\s]*)/)[1], 10);
          client.zadd("sample-data-mem", (new Date).getTime()/1000, val);
        }
       })


      if(cnt < 86400/5){
        setTimeout(doIt, 1000);
      }
  });
}

doIt();


