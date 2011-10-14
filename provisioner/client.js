var newId = require("uuid-pure").newId;
var redis = require("redis").createClient;

var resque = require('coffee-resque').connect({
  host: "127.0.0.1",
  port: "6868",
  password: "IUBknfXqMHWtWZ6MF1wbP9P4vQiKhYle6GBrittBs0gRGZxzqXHrDwLJTeL3uv3EyT38z417EzX0qSOlQUUjJtrTF6mgmuU2fvC9ZnNiGwKHl5Q8cdt97JU7dX7aXyFklo6Ccj7ylCh7kCUMlvlDm3OQWaCVadUBag695cEmhMivC38836HjrI7fvcWExE2ErR1qTtRRTsQoeZX3VuvWoIrSb6x5fPfuEb3pkoYh002BeO1NWIyQs0GyDk0m0leQtndHHYsDRvzb6cHI1krimXGutv4fULbKX9wRGu2nBWj1CB6iryKMRkN0O7BsGElEQ9XrFFe1A5UEeZcyVZJ1SSx9GmcxuxnMBtciIOHRylTAM9X4NWzA4eCGOOBxXzYL1gUkIiqyWyxhG1A0Py1mSFK3CcV9ciNBegzqjqOiC4uWhrKm32WBMAtfKpsBOQaAKmRAQ6RiXcaZZa894yjXVD17DntzV5yMpXj4fh94DR8im7XMeOQRlffoslUjEgAk33SK7HMIzNFFS3em3cojiF2cc9I0k5JohCxWjFoA7LRM89VnTlNZTfywIZAYn0aKsWd4FE8ihSickn730mDExoACjN5pMSm3iAr6jJEDNzngdzBjeYLuXV6V4yrCmQvcQ638nkrTZjSaraUrSmssYStl69t2YZLsP7CWSvvo57KkgXBgRWX9g2G5d8YVFlaXXnO0ztVWwbKwxNDfWqbphMkJq4NbZWm9d9U2V2ivbSK7yT68aJSO44zoQx5qn2kLZ9rQDKpzUmabWABxlU0lhvZ758yBGI7pgm2DTn7FpAGOmv5UBjsP3kZt2hZ93BO4rdxX3mghGRASH7Z3QVwPcrwvHE9SnUiZRNOnLGpdrx3fGWpWV1vIodZcPjGCxuLrmRlUh6brPrL4AHJ6ycK8oyniNpNuR29N4j7PbhctHcpr7cC5Qh7I0JLbnhqtool6H89VgsRNs2DjsBSwx7wwtIh4sL7A2S8aLs4z5CSof"
});

var provisionerdb = redis("1339", "127.0.0.1");
provisionerdb.auth("2P7gLIwQZ1JyaNdCu8islh3uUwv1huY71IG6Ih434SBoS7X81Pq9o8bxfVfxKoQojlcH3ypT2Rec1QESmONLh1RMhJCAAAv6In9iWbl2QTXyaVRec2pBP1h9nhELoVEnFvrRhHKYnj94h4Z822NuY0iz1oV0GCrdRU0XG09kmDlKNq375Wb13DwjcTJ6dHGi5wIxgnqfJRjoiBWlweBEdbEvMKYz01xB49fXLZcluvfbHMBQcgkcFBmjQpe76WK84lyS9teluSO7GLmz6IcdK6v82wYkOGoyflYqpVmvbJlKYYT70QqzethZSU77OaBV4GlX7TJGBzUacrz9aytIs5EPdfynAPBlsYt2jKohEpjcG7AWO323wUiX5APUrPBth601qXUBTjaWJWbr8VrMgZ6G5XHe1OfMvSVTTBYUCDBVr9eqL5VG1dwUyPXLQXroMA4akGdHNQQMMONh4EeO4uNVVVxxUGeq2iBkRRuifHzhCU6KIv1yvxQqei9ex2KAew0CFR9Rv1BEAiGKYkJLK8SbmvPxRJkuuw8L4Ql4Tta3PoNdqRtH7nQdKjIfNOilkHiJkmgAyKaOIF2058yVXWnnjAZHtB5pZxYpJ09nRsfLuD1UFb9XN0I91DQmOzottTRKZdKIn6nMvGUeaL7Wd79Cqga23HqZEU4EDgvfz4xoFz80dVFYq8Wb1ZBMWZc1kn7eE9FRsD3veLojaCSfQeSSb3OBzKAK9mua5z16bgmLtGL8ZR87mlbsAlzJI3b1nOencKBfNUOQhDu66JfOJ0MK3dYtQBV7K6UFjuOFrr3nfShqCjdkMn3A9QJZsCdr36f88zxqi47cK7Xc5cv9EPKYKP9t8eDhMdBI1oOgGFsRzj1fd16m53apXHr3Sg5CCDkdbMESOlHm58m3sm4PB9goZvSVQlsfK2PqeH4P8SkZBrU6Kpy1W40j5OG06MrZzQAVhFNk9OwGLaaPFiLRUefDIDxwcXsnmKlEN9SYd");

var MAX_TRIES = 5;

function createDb(callback){
  var id = newId(22, 36);  
  var failures = 0;
  var tester;
  var test = function(){
    provisionerdb.hgetall("/databases/"+id, function(err, obj){
      if(err || Object.keys(obj).length === 0){
        failures = failures + 1;
        console.log("COULD NOT CONFIRM", id);
        if(failures >= MAX_TRIES){
          console.log("GIVING UP", id);
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
  resque.end();
  provisionerdb.quit();
}

module.exports.provision = createDb;
module.exports.quit = quit;
