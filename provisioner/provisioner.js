var fs = require("fs"),
path = require("path"),
sha1 = require("easyhash")('sha1'),
provision = require("./provision"),
newId = require("uuid-pure").newId,
redis = require("redis").createClient;

var nopt = require("nopt");


var knownOpts = {
  "myhost": [String],
  "dataDir":[String],
  "confPath":[String]
};

var parsed = nopt(knownOpts, {}, process.argv, 2);

//defaults
var myhost = "apbmba.local";
var dataDir = "/tmp/timeseries-dbs/data";
var confPath = "/tmp/timeseries-dbs/conf";

//overrides
if(parsed.myhost){ myhost = parsed.myhost; }
if(parsed.dataDir){ dataDir = parsed.dataDir; }
if(parsed.confPath){ confPath = parsed.confPath; }

//setup db connections to provisionerdb and work queue

var mydbId = "/databases/hosts/"+myhost;

var provisionerdb = redis("1339", "127.0.0.1");
provisionerdb.auth("2P7gLIwQZ1JyaNdCu8islh3uUwv1huY71IG6Ih434SBoS7X81Pq9o8bxfVfxKoQojlcH3ypT2Rec1QESmONLh1RMhJCAAAv6In9iWbl2QTXyaVRec2pBP1h9nhELoVEnFvrRhHKYnj94h4Z822NuY0iz1oV0GCrdRU0XG09kmDlKNq375Wb13DwjcTJ6dHGi5wIxgnqfJRjoiBWlweBEdbEvMKYz01xB49fXLZcluvfbHMBQcgkcFBmjQpe76WK84lyS9teluSO7GLmz6IcdK6v82wYkOGoyflYqpVmvbJlKYYT70QqzethZSU77OaBV4GlX7TJGBzUacrz9aytIs5EPdfynAPBlsYt2jKohEpjcG7AWO323wUiX5APUrPBth601qXUBTjaWJWbr8VrMgZ6G5XHe1OfMvSVTTBYUCDBVr9eqL5VG1dwUyPXLQXroMA4akGdHNQQMMONh4EeO4uNVVVxxUGeq2iBkRRuifHzhCU6KIv1yvxQqei9ex2KAew0CFR9Rv1BEAiGKYkJLK8SbmvPxRJkuuw8L4Ql4Tta3PoNdqRtH7nQdKjIfNOilkHiJkmgAyKaOIF2058yVXWnnjAZHtB5pZxYpJ09nRsfLuD1UFb9XN0I91DQmOzottTRKZdKIn6nMvGUeaL7Wd79Cqga23HqZEU4EDgvfz4xoFz80dVFYq8Wb1ZBMWZc1kn7eE9FRsD3veLojaCSfQeSSb3OBzKAK9mua5z16bgmLtGL8ZR87mlbsAlzJI3b1nOencKBfNUOQhDu66JfOJ0MK3dYtQBV7K6UFjuOFrr3nfShqCjdkMn3A9QJZsCdr36f88zxqi47cK7Xc5cv9EPKYKP9t8eDhMdBI1oOgGFsRzj1fd16m53apXHr3Sg5CCDkdbMESOlHm58m3sm4PB9goZvSVQlsfK2PqeH4P8SkZBrU6Kpy1W40j5OG06MrZzQAVhFNk9OwGLaaPFiLRUefDIDxwcXsnmKlEN9SYd");

var resque = require('coffee-resque').connect({
  timeout: 50,
  host: "127.0.0.1",
  port: "6868",
  password: "IUBknfXqMHWtWZ6MF1wbP9P4vQiKhYle6GBrittBs0gRGZxzqXHrDwLJTeL3uv3EyT38z417EzX0qSOlQUUjJtrTF6mgmuU2fvC9ZnNiGwKHl5Q8cdt97JU7dX7aXyFklo6Ccj7ylCh7kCUMlvlDm3OQWaCVadUBag695cEmhMivC38836HjrI7fvcWExE2ErR1qTtRRTsQoeZX3VuvWoIrSb6x5fPfuEb3pkoYh002BeO1NWIyQs0GyDk0m0leQtndHHYsDRvzb6cHI1krimXGutv4fULbKX9wRGu2nBWj1CB6iryKMRkN0O7BsGElEQ9XrFFe1A5UEeZcyVZJ1SSx9GmcxuxnMBtciIOHRylTAM9X4NWzA4eCGOOBxXzYL1gUkIiqyWyxhG1A0Py1mSFK3CcV9ciNBegzqjqOiC4uWhrKm32WBMAtfKpsBOQaAKmRAQ6RiXcaZZa894yjXVD17DntzV5yMpXj4fh94DR8im7XMeOQRlffoslUjEgAk33SK7HMIzNFFS3em3cojiF2cc9I0k5JohCxWjFoA7LRM89VnTlNZTfywIZAYn0aKsWd4FE8ihSickn730mDExoACjN5pMSm3iAr6jJEDNzngdzBjeYLuXV6V4yrCmQvcQ638nkrTZjSaraUrSmssYStl69t2YZLsP7CWSvvo57KkgXBgRWX9g2G5d8YVFlaXXnO0ztVWwbKwxNDfWqbphMkJq4NbZWm9d9U2V2ivbSK7yT68aJSO44zoQx5qn2kLZ9rQDKpzUmabWABxlU0lhvZ758yBGI7pgm2DTn7FpAGOmv5UBjsP3kZt2hZ93BO4rdxX3mghGRASH7Z3QVwPcrwvHE9SnUiZRNOnLGpdrx3fGWpWV1vIodZcPjGCxuLrmRlUh6brPrL4AHJ6ycK8oyniNpNuR29N4j7PbhctHcpr7cC5Qh7I0JLbnhqtool6H89VgsRNs2DjsBSwx7wwtIh4sL7A2S8aLs4z5CSof"
});

function createDb(id, cb){
  provisionerdb.hincrby(mydbId, "nextPort", 1, function(err, port){
    if(err) return cb(err);
    
    var password = newId(1001, 62);
    
    provision(id, port, password, dataDir, confPath, function(err, settings){
      if(err) return cb(err);

      settings.host = myhost;
      provisionerdb.hmset("/databases/"+id, settings, function(err, status){
        if(err) return cb(err);
        cb(null, settings);
      });  
    });
  });
}

var provisionWorker = {
  provision: function(data, callback) {
    //what should be in data? the information for how to acknowledge that this redis server exists?
    createDb(data.id, function(err, settings){
      if(err) return callback(new Error(err));
      callback();
      console.log(data, settings);
    });
  },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
};

function initialize(cb){
  provisionerdb.sadd("/databases/hosts", myhost, function(err, status){
    provisionerdb.hget(mydbId, "nextPort", function(err, nextPort){
      if(!nextPort){
        provisionerdb.hset(mydbId, "nextPort", "22222", function(err, status){
          cb();
        });
      }
      cb();
    });
  });
}

initialize(function(){
  // setup a worker
  worker = resque.worker('redis-servers', provisionWorker);
  worker.start();
});