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
  function renderAccount(res, template, locals){
    res.end(Transitive.Views.renderPage(template, locals));
  }
  
  status = JSON.parse(fs.readFileSync(Transitive.options.root+"/status.json"));
  
  routes.get("/account", function(req, res){
    renderAccount(res, "account", {status:status});
  });
  
  routes.get("/environments/1", function(req, res){
    renderAccount(res, "environment/environment", {status:status});
  });
  
  
  routes.get("/server/123", function(req, res){
    renderAccount(res, "server/server", {status:status});
  });
  
  routes.get("/server/123/networking", function(req, res){
    renderAccount(res, "server/networking", {status:status});
  });
  
  routes.get("/process", function(req, res){
    renderAccount(res, "process", {status:status});
  });
};