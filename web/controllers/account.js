fs = require("fs");

status = {};

function infoForProcess(status, pid){
  var processes = status.processes;
  return {
    id: status.machineid+"-"+pid.toString()+"-"+processes.lstart[pid].getTime().toString(),
    lstart: processes.lstart[pid],
    args: processes.args[pid],
    ucomm: processes.ucomm[pid],
    cpu: processes.cpu[pid],
    vsz: processes.vsz[pid],
    rss: processes.rss[pid],
    mem: processes.mem[pid],
    utime: processes.utime[pid],
    time: processes.time[pid],
    ports: status.ports[pid]
  };
}


module.exports = function(routes, Transitive){
  status = JSON.parse(fs.readFileSync(Transitive.options.root+"/status.json"));
  
  routes.get("/account", function(req, res){
    res.end(Transitive.Views.renderPage("account", {status:status}));
  });
};