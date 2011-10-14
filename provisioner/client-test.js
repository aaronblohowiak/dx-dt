var client = require("./client");

client.provision(function(err, connectionOptions){
  if(err){
    console.log("ERROR:", err);
  }else{
    console.log("success:", connectionOptions);
  }
  
  client.quit();
});