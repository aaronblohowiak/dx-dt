fs = require("fs"), sys = require("sys");


  
function parseAll(){
  var results = {};
  results.processes = {};

  var machineid = fs.readFileSync("machineid", "utf-8").split("\n")[0];

  results.machineid = machineid;

  var ps = results.processes;

  ps.lstart = readAndParsePs("processes/lstart.stdout.txt", date);

  ps.args = readAndParsePs("processes/args.stdout.txt", trim);
  ps.ucomm = readAndParsePs("processes/ucomm.stdout.txt", trim);

  ps.cpu = readAndParsePs("processes/cpu.stdout.txt", float);
  ps.vsz = readAndParsePs("processes/vsz.stdout.txt", float);
  ps.rss = readAndParsePs("processes/rss.stdout.txt", float);
  ps.mem = readAndParsePs("processes/mem.stdout.txt", float);

  //grrrr, need to capture some output with days of cpu usage in order to trust the processing
  ps.utime = readAndParsePs("processes/utime.stdout.txt", noop);
  ps.time = readAndParsePs("processes/time.stdout.txt", noop);

  results.ports = readAndParseLsof("sys/lsoftcp.stdout.txt");
  results.filesystems = readAndParseDf("sys/df.stdout.txt");

  results.machine = {
    id: machineid,
    hostname : readAndParseHostname("sys/hostname.stdout.txt"),
    ifconfig : fs.readFileSync("sys/ifconfig.stdout.txt", "utf-8")
  }

  return results;
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

function readAndParseDf(filename){
  var src;
  try{
    src = fs.readFileSync(filename, "utf-8");
  }catch(e){ return; }

  var lines = src.split("\n");
  var match, name;
  var filesystems = {}
  //1 not 0 so we skip first line
  for (var i = 1; i < lines.length; i++) {

    // name total used free free% mounted@
    match = lines[i].match(/(.* )(\d+)\s+(\d+)\s+(\d+)\s+(\d+)%\s+(\/.*)/)
    if(match){
      //trim
      name = match[1].match(/\s*(.*[^\s])\s+/)[1];
      filesystems[name] = {
        total: float(match[2]),
        available: float(match[4]),
        free: float(match[5]),
        mounted: match[6]
      }
    }
  };
  return filesystems;
}

function readAndParseLsof(filename){
  var ports = {};
  var src = fs.readFileSync(filename, "utf-8");
  var lines = src.split("\n");
  var match;

  var currentPid = "0";
  for (var i = 0; i < lines.length; i++) {
    if(lines[i].length === 0){ continue };
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

function readAndParsePs(filename, fn){
  var src = fs.readFileSync(filename, "utf-8");
  return parsePs(src, fn);
}

/*
lstart = fs.readFileSync("processes/lstart.stdout.txt", "utf-8");
starthsh = parsePs(lstart, function(e){ return (new Date(e))});

args = fs.readFileSync("processes/args.stdout.txt", "utf-8");
argshsh = parsePs(lstart, function(e){ return e; });

cpu = fs.readFileSync("processes/cpu.stdout.txt", "utf-8");
cpuhsh = parsePs(cpu, function(e){return parseFloat(e, 10); });
mem = fs.readFileSync("processes/mem.stdout.txt", "utf-8");
cpuhsh = parsePs(cpu, function(e){return parseFloat(e, 10); });
*/

//console.log(sys.inspect(hsh));

module.exports.readAndParseLsof = readAndParseLsof;
module.exports.readAndParseDf = readAndParseDf;


