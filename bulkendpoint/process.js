fs = require("fs"), sys = require("sys");

process.chdir("stats_1314776266/");

machineid = fs.readFileSync("machineid", "utf-8").split("\n")[0];

var results = {};

results.machineid = machineid;


function parsePs (stdout, canonicalize) {
  var ary = stdout.split("\n"),
            match,
            result = {};

  for (var i = ary.length - 1; i >= 0; i--){
    match = ary[i].match(/\s*(\d*)\s+(.*)/);
    if(match){
      var value = canonicalize(match[2]);
      result[match[1]] = value;
    }
  }
  return result;
}


lstart = fs.readFileSync("processes/lstart.stdout.txt", "utf-8");
starthsh = parsePs(lstart, function(e){ return (new Date(e))});

args = fs.readFileSync("processes/args.stdout.txt", "utf-8");
argshsh = parsePs(lstart, function(e){ return e; });

cpu = fs.readFileSync("processes/cpu.stdout.txt", "utf-8");
cpuhsh = parsePs(cpu, function(e){return parseFloat(e, 10); });
mem = fs.readFileSync("processes/mem.stdout.txt", "utf-8");
cpuhsh = parsePs(cpu, function(e){return parseFloat(e, 10); });


//console.log(sys.inspect(hsh));

