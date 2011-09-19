require("hiredis");
var client = require("redis").createClient();

function zrangeWithScoresToArrayOfTuples(ary){
  var retAry = [];
  for (var i = 0; i < ary.length - 1; i=i+2) {
    retAry.push([parseInt(ary[i+1], 10), parseFloat(ary[i], 10)]);
    //retAry.push([ary[i+1], ary[i]]);
  }
  return retAry;
}

module.exports = function(routes, Transitive){
  
  function home(req, res){
    res.writeHead(200, { 
      'Content-Type': 'text/html'
    });
    
    res.end(Transitive.Views.renderPage("landing",{},"marketing"));
  }
  
  routes.get("/", home);
  routes.get("/index.html", home);
    
  routes.get("/sample-data-ping", function(req, res){
    //var snapshot = profiler.takeSnapshot("beforeredis")      //takes a heap snapshot
    //profiler.startProfiling("sampleDataProcessing");
    client.zrange("sample-data-ping", -5000, -1, "WITHSCORES", function(err, data){
      var timeSeries = zrangeWithScoresToArrayOfTuples(data);
      timeSeries.id = "sample-data-ping";
      res.end(Transitive.Views.renderPage("sample-data-ping", { timeSeries: timeSeries }));
      //var cpuProfile = profiler.stopProfiling("sampleDataProcessing");
      //var snapshot = profiler.takeSnapshot("afterRedis")      //takes a heap snapshot
    });
  });



  //ideas for plans:
    //  $50/month includes N servers, each additional is $10/per server per month.
    //Have more than X servers? Contact Us for volume discount.
};

