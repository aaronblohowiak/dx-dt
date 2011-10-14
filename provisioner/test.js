redis = require("redis").createClient;
newId = require("uuid-pure").newId;

provision = require("./provision");

var password = newId(1001, 62);

console.log("Password", password);


provision("testing-provision", 1338, password, "/tmp/timeseries-dbs/data/", "/tmp/timeseries-dbs/confs/testing.conf", function(){
  console.log(arguments);
  process.exit();
});

