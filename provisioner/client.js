//VERSION 1.0 - Oct 14, 2011

var newId = require("uuid-pure").newId;

var MAX_TRIES = 5;

function createDb(callback){
  var provisionerdb = this.provisionerdb;
  var resque = this.resque;
  
  var id = newId(22, 36);  
  var failures = 0;
  var tester;
  var test = function(){
    provisionerdb.hgetall("/databases/"+id, function(err, obj){
      if(err || Object.keys(obj).length === 0){
        failures = failures + 1;
        if(failures >= MAX_TRIES){
          callback(err||"Could not confirm.");
          clearTimeout(tester);
        }
      } else{
        callback(null, obj);
        clearTimeout(tester);
      }
    });
  };

  resque.enqueue('redis-servers', 'provision', [{
    id: id
  }]);
  tester = setInterval(test, 25);
}

function quit(){
  this.resque.end();
  this.provisionerdb.quit();
}

module.exports.provision = createDb;
module.exports.quit = quit;
