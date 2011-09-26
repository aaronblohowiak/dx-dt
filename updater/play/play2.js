fs = require("fs");
path = require("path");
sha1 = require("easyhash")('sha1');

rimraf = require("rimraf");
newId = require("uuid-pure").newId;

keys = Object.keys;

function loadJson(filename){
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
}

var snap = loadJson("json-0").results;

function createIds(status){
  var machineid = status.machineid;
  var lstart = status.processes.lstart;

  status.processes.ids = {};
  var ids = status.processes.ids;
  
  for(var pid in lstart){
    ids[pid] = sha1( machineid+"-"+pid.toString()+"-"+lstart[pid].toString());
  }
}

createIds(snap);

