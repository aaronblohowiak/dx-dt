fs = require("fs");
path = require("path");
sha1 = require("easyhash")('sha1');

rimraf = require("rimraf");
newId = require("uuid-pure").newId;

keys = Object.keys;

function loadJson(filename){
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
}

var snaps = [];
for (var i=0; i < 6; i++) {
  snaps.push(loadJson("json-"+i).results);
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

function relevantPids(snap){
  var lstart = Object.keys(snap.processes.lstart);
  var args = Object.keys(snap.processes.args);
    
  return arrayDiff(lstart, args).shared;
}

function compareProcs(aSnap, bSnap){
  var aDate = aSnap.machine.date;
  var aPids = relevantPids(aSnap);
  var bPids = relevantPids(bSnap);

  var diff = arrayDiff(aPids, bPids);
  
  console.log("TERMINATED PROCS:");
  for (var i = diff.missing.length - 1; i >= 0; i--){
    console.log("  name: " + aSnap.processes.ucomm[diff.missing[i]]);
    console.log("  lstart: " + new Date(aSnap.processes.lstart[diff.missing[i]]*1000).toString());
    console.log("  length: " + (aDate - aSnap.processes.lstart[diff.missing[i]]));
    console.log("");
  }
  
  console.log("NEW PROCS:");
  for (i = diff.extra.length - 1; i >= 0; i--){
    console.log("  name: " + bSnap.processes.ucomm[diff.extra[i]]);
    console.log("  lstart: " + bSnap.processes.lstart[diff.extra[i]]);
    console.log("");
    
  }
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


for (var recent=0; recent < 5; recent++) {
  compareProcs(snaps[recent], snaps[recent+1]);  
}

