var exec = require('child_process').exec;

var Transitive = new (require("transitive"))();

var options = {};

if(process.env["NODE_ENV" == "production"]){
  options.port = 80;
}


//boot transitive, compiling everything and creating server 
(function(){
  Transitive.boot(this, options);
})();


Transitive.App = {};

Transitive.App.getUniqueServerIdentifier = function(cb){
  var sh_command = "bash -c 'if command -v md5 &>/dev/null; then ifconfig -a | grep ..:..:..:..:..:.. | md5; else ifconfig -a | grep ..:..:..:..:..:.. | md5sum; fi;'";
  exec(sh_command, function (error, stdout, stderr) {
      console.log("out: "+stdout.toString());
      console.log("err: "+stderr.toString());
      var out = stdout.split(" ")[0];
      cb(error, out, stderr);
  });
};

Transitive.App.getFullProcessInfo = function(pid, cb){
  exec('ps -o pid -o %cpu -o %mem -o args | grep '+pid+' | grep -v grep',
    function (error, stdout, stderr) {
      cb(error, stdout.split("\n")[0], stderr);
  });
};

Transitive.App.getStartForProcess = function(pid, cb){
  exec('ps -o pid -o lstart | grep '+pid+' | grep -v grep',
    function (error, stdout, stderr) {
      var ary = stdout.split("\n"), match;
      for (var i = ary.length - 1; i >= 0; i--){
        match = ary[i].match(/^\s*(\d*)\s+(.*)/);
        if(match){
          var start = match[2];
          console.log(ary[i]);
          console.log(JSON.stringify(match));
          console.log("start="+start)
          start = new Date(start);
          cb(error, start);
          return;
        }
      }
      console.log("NO MATCH");
      console.log(stdout);
      console.log(stderr);
      console.log(pid);
  });
};

Transitive.App.getCPUforProcess = function(pid, cb){
  exec('ps -o pid -o %cpu | grep '+pid+' | grep -v grep',
    function (error, stdout, stderr) {
      var ary = stdout.split("\n"), match;
      for (var i = ary.length - 1; i >= 0; i--){
        match = ary[i].match(/\s*(\d*)\s+(.*)/);
        if(match){
          var percent = match[2];
          percent = parseFloat(percent, 10);
          cb(error, percent);
          return;
        }
      }
  });
};

Transitive.App.getMemforProcess = function(pid, cb){
  child = exec('ps -o pid -o %mem | grep '+pid+' | grep -v grep',
    function (error, stdout, stderr) {
      var ary = stdout.split("\n"), match;
      for (var i = ary.length - 1; i >= 0; i--){
        match = ary[i].match(/\s*(\d*)\s+(.*)/);
        if(match){
          var percent = match[2];
          percent = parseFloat(percent, 10);
          cb(error, percent);
          return;
        }
      }
  });
};

setInterval(function(){
  Transitive.App.getFullProcessInfo(process.pid, function(error, stdout, stderr){
    Transitive.pushIt.publish(process.pid.toString(), {id: process.pid, stats: stdout});
  });
}, 1000);

setInterval(function(){
  Transitive.App.getCPUforProcess(process.pid, function(error, percent){
    Transitive.pushIt.publish(process.pid.toString()+"%cpu", [(new Date()).getTime(), percent]);
  });
}, 1000);

setInterval(function(){
  Transitive.App.getMemforProcess(process.pid, function(error, percent){
    Transitive.pushIt.publish(process.pid.toString()+"%mem", [(new Date()).getTime(), percent]);
  });
}, 1000);




Transitive.ringBuffers = {
  data : {},
  ensureKey: function(key){
    if(!this.data.hasOwnProperty(key)){
      this.data[key] = [];
      this.data[key].index = 0;
      this.data[key].id = key;
    }
  },
  update: function(key, value){
    this.ensureKey(key);
    var data = this.data[key];
    data[data.index] = value;
    if(data.index++ > 30){
      data.index = 0;
    }
  },
  get: function(key){
    this.ensureKey(key);
    var ary = this.data[key], idx = ary.index;

    var inOrder = ary.slice(idx, ary.length).concat(ary.slice(0, idx));

    if(inOrder.length < 30 ){
      var needs = 30 - inOrder.length;
      for (var i=1; i < needs+1; i++) {
        inOrder.unshift([ary[0][0] - (i * 1000), 0]);
      }
    }
    inOrder.id = key;
    return inOrder;
  }
};


console.log("Server started. listening on port " + Transitive.server.address().port);
