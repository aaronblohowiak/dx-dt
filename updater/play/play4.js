fs = require("fs");
sys = require("sys");
path = require("path");
sha1 = require("easyhash")('sha1');

rimraf = require("rimraf");
newId = require("uuid-pure").newId;

redis = require("redis");

//TODO: make this smarter =)
function getRedisClientForUpdate(data, cb){
  cb(null, redis.createClient()); //maybe different port =)
}

function updatingMachine(client, lastStatus, status){
  console.log("Updating Machine", machineid);
  console.log("lastStatus", lastStatus);
  console.log(sys.inspect(status.machine));
  client.end();          
  
}

function newMachine(client, status){
  var machineid = status.machine.machineid;
  console.log("New Machine", machineid);
  
  console.log(JSON.stringify(status));
  client.end();
}

function getMachineStatus(client, machineid, cb){
  client.hgetall("servers/"+machineid, function(err, lastStatus){
    if(err) return cb(err);
    cb(null, lastStatus);
  });
}

function relevantPids(snap){
  var lstart = Object.keys(snap.processes.lstart);
  var args = Object.keys(snap.processes.args);
    
  return arrayDiff(lstart, args).shared;
}


function arrayDiff(a, b){
  var extra=[], missing=[], shared=[];
  a.sort();
  b.sort();

  var aIndex = 0, bIndex = 0;
  ret = [];
  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] < b[bIndex]){
      missing.push(a[aIndex]);
      aIndex++;
    }
    else if (b[bIndex] < a[aIndex]){
      extra.push(b[bIndex]);
      bIndex++;
    } 
    else {
      shared.push(a[aIndex]);
      aIndex++;
      bIndex++;
    }
  }
  return {extra: extra, missing: missing, shared: shared};
}

function createIds(status){
  var machineid = status.machineid;
  var lstart = status.processes.lstart;

  status.processes.ids = {};
  var ids = status.processes.ids;
  var pids = relevantPids(status);
  
  for (var i = pids.length - 1; i >= 0; i--){
    ids[pids[i]] = sha1( machineid+"-"+pids[i]+"-"+lstart[pids[i]]);
  }
}

function onUpdate(data, cb){
  createIds(data.results);
  //get redis connection for data
  getRedisClientForUpdate(data, function(err, client){
    var status = data.results;
    var machineid = status.machine.machineid;
    
    //check last update time and compare to this update (are we doing historical data?)
    getMachineStatus(client, machineid, function(err, lastStatus){
      if(err){
        try{
          client.end();          
        }catch(e){}

        return cb(err);
      } 
      
      if(Object.keys(lastStatus).length){
        updatingMachine(client, lastStatus, status);
      }else{
        newMachine(client, status);
      }
    });

    //diff current processes with ones in update
      // for all new processes, do blah
      // for all terminated processes, do blah
    // push stats for all relevant processes
  });
}


function loadJson(n){
  return JSON.parse(fs.readFileSync("json-"+n, "utf-8"));
}

onUpdate(loadJson(0));