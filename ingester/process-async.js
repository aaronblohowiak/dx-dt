var DS = require("DeskSet");

var fs = require("fs"), sys = require("sys");

function parseAll(dir, callback){
  processDir = dir + "processes/";
  sysDir = dir + "sys/";
  
  var processes = new DS(function(err, processes){
    var results = {};
    results.processes = processes;
    
    var sys = new DS(function(err, sys){
      results.filesystems = sys.filesystems;
      results.ports = sys.ports;
      results.machine = {};
      results.machine.hostname = sys.hostname;
      results.machine.ifconfig = sys.ifconfig;
      results.machine.id = sys.machineid;
      callback(results);
    });

    sys.add("machineid", readAnd, dir+"machineid", firstline);
    sys.add("ports", readAnd, sysDir+"lsoftcp.stdout.txt", parseLsof);
    sys.add("filesystems", readAnd, sysDir+"df.stdout.txt", parseDf);
    sys.add("ifconfig", readAnd, sysDir+"ifconfig.stdout.txt", noop);
    sys.add("hostname", readAnd, sysDir+"hostname.stdout.txt", firstline);
  });
  
  
  processes.add("lstart", readAndParsePs, processDir+"lstart.stdout.txt", date);
  
  processes.add("args", readAndParsePs, processDir+"args.stdout.txt", trim);
  processes.add("ucomm", readAndParsePs, processDir+"ucomm.stdout.txt", trim);

  processes.add("rss", readAndParsePs, processDir+"rss.stdout.txt", float);
  processes.add("vsz", readAndParsePs, processDir+"vsz.stdout.txt", float);
  
  processes.add("utime", readAndParsePs, processDir+"utime.stdout.txt", noop);
  processes.add("time", readAndParsePs, processDir+"time.stdout.txt", noop);

  processes.add("mem", readAndParsePs, processDir+"mem.stdout.txt", float);
  processes.add("cpu", readAndParsePs, processDir+"cpu.stdout.txt", float);
}

module.exports = parseAll;

function date (e){
  return (new Date(e));
}

function noop(e){
  return e;
}

function trim(e){
  e = e.toString();
  var match = e.match(/\s*(.*[^\s])\s+/);
  if(match){
    return match[1];
  } else {
    return e;
  }
}

function firstline(e){
  return e.toString().split("\n")[0];
}

function float(e){
  return parseFloat(e, 10);
}

function parsePs (stdout, canonicalize) {
  var ary = stdout.split("\n"),
            match,
            result = {};

  for (var i = ary.length - 1; i >= 0; i--){
    match = ary[i].match(/\s*(\d*)\s+(.*)/);
    if(match && match[1]){
      var value = canonicalize(match[2]);
      result[match[1]] = value;
    }
  }
  return result;
}

function readAndParseHostname(filename){
  var src = fs.readFileSync(filename, "utf-8");
  return src.split("\n")[0];
}

function parseDf(src){
  var lines = src.split("\n");
  var match, name;
  var filesystems = {};
  //1 not 0 so we skip first line
  for (var i = 1; i < lines.length; i++) {

    // name total used free free% mounted@
    match = lines[i].match(/(.* )(\d+)\s+(\d+)\s+(\d+)\s+(\d+)%\s+(\/.*)/);
    if(match){
      //trim
      name = match[1].match(/\s*(.*[^\s])\s+/)[1];
      filesystems[name] = {
        total: float(match[2]),
        available: float(match[4]),
        free: float(match[5]),
        mounted: match[6]
      };
    }
  }
  return filesystems;
}


function parseLsof(src){
  var ports = {};
  var lines = src.split("\n");
  var match;

  var currentPid = "0";
  for (var i = 0; i < lines.length; i++) {
    if(lines[i].length === 0){ continue; }
    if(lines[i].charAt(0) == "p"){
      currentPid = lines[i].substr(1);
    }else{
      if(!ports.hasOwnProperty(currentPid)){
        ports[currentPid] = [];
      }
      match = lines[i].match(/^n(.+):(.*)$/);
      if(match){
        ports[currentPid].push({host: match[1], port: match[2]});
      }else{
        console.log("No match:" + lines[i].toString());
      }
    }
  }
  return ports;
}

function readAnd(filename, fn, cb){
  fs.readFile(filename, "utf-8", function(err, src){
    if(err) return cb(err);
    cb(null, fn(src));
  });
}

function readAndParsePs(filename, fn, cb){
  readAnd(filename, function(src){
    return parsePs(src, fn);
  }, cb);
}
