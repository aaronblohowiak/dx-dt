require("hiredis");
var client = require("redis").createClient();

module.exports = function(routes, Transitive){
  
  function marketing(req, res, page){
    res.writeHead(200, { 
      'Content-Type': 'text/html'
    });
    
    res.end(Transitive.Views.renderPage("marketing/"+page,{},"marketing"));
  }
  
  function home(req, res){
    marketing(req, res, "landing");
  }
  
  routes.get("/", home);
  routes.get("/index.html", home);

  routes.get("/plans", function(req, res){
    marketing(req, res, "plans");
  });
  
  routes.get("/terms", function(req, res){
    marketing(req, res, "terms");
  });
  
  //ideas for plans:
    //  $50/month includes N servers, each additional is $14/per server per month.
    //Have more than X servers? Contact Us for volume discount.
};

