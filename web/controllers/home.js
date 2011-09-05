var exec = require('child_process').exec,
    client = require("redis").createClient();


function zrangeWithScoresToArrayOfTuples(ary){
  var retAry = [];
  for (var i = 0; i < ary.length - 1; i=i+2) {
    retAry.push([parseInt(ary[i+1], 10), parseFloat(ary[i], 10)]);
  };
  return retAry;
}

module.exports = function(routes, Transitive){
  routes.get("/sample-data-ping", function(req, res){
    client.zrange("sample-data-ping", -5000, -1, "WITHSCORES", function(err, data){
      var timeSeries = zrangeWithScoresToArrayOfTuples(data);
      timeSeries.id = "sample-data-ping";
      console.log(timeSeries);
      res.end(Transitive.Views.renderPage("sample-data-ping", { timeSeries: timeSeries }));
    });
  });

  routes.get("/", function(req, res){
    res.writeHead(200, { 
      'Content-Type': 'text/html', 
      'Cache-Control': 'no-cache, no-store'
    });

    var cpu = [];
    cpu.id = process.pid.toString()+"%cpu";
    
    var mem = [];
    mem.id = process.pid.toString()+"%mem";

    Transitive.App.getStartForProcess(process.pid, blah);

    var startTime;
    function blah(error, start){
      startTime = start;
      Transitive.App.getUniqueServerIdentifier(withId);
    }

    function withId(error, id, stderr){
      exec('ps -Aef | grep '+process.pid+' | grep -v grep', function (error, stdout, stderr) {
        res.end(Transitive.Views.renderPage("home", {
          process: {id: process.pid.toString(), stats: stdout},
          cpu: cpu,
          mem: mem,
          pid: process.pid,
          serverId: id,
          start: startTime
        }));
      });
    }

  });
};

