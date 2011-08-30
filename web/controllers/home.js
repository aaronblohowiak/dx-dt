var exec = require('child_process').exec;

module.exports = function(routes, Transitive){
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
      console.log("in blah")
      startTime = start;
      Transitive.App.getUniqueServerIdentifier(withId);
    }

    function withId(error, id, stderr){
      console.log("in withId")

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
