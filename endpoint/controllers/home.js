formidable =  require("formidable");
msgpack = require("msgpack2");
newId = require("uuid-pure").newId;
basicAuth = require("../lib/basic-auth");

module.exports = function(routes, Transitive){
  var q = Transitive.App.bulkQueue;

  routes.post("/install-failed", function(req, res){
    var auth = basicAuth(req);
    var account = auth[0], token = auth[1];
    
    //todo: check authentication credentials.

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
      q.redis.publish("/pushIt/accounts/"+account+"/installer", JSON.stringify({
        type:"failed",
        reason: fields.failure
      }));
      res.writeHead(200,{});
      res.end("Failure has been reported. Thank you.");
    });
  });

  routes.post("/", function(req, res){
    var auth = basicAuth(req);
    var account = auth[0], token = auth[1];
    
    var form = new formidable.IncomingForm();
    form.uploadDir = Transitive.options.root + '/tmp';
    
     form.parse(req, function(err, fields, files) {
       fields.account = account;
       fields.token = token;

       var id = newId();
       if(err){
         res.writeHead(500, {'content-type': 'text/plain'});
         res.write("Server Error.\n\n");
         res.end();
         return;
       }

       var shallowFiles = {}, f; // can't serialize files normally =/
       for(var filename in files){
         f = files[filename];
         shallowFiles[filename] = {
           size: f.size,
           path: f.path,
           name: f.name
         };
       }

       var requestData = {fields: fields, files: shallowFiles, uid: id};
       
       q.enqueue("bulkuploads", "ingest", [requestData]);
       
       res.writeHead(200, {'content-type': 'text/plain'});
       res.write('received upload:\n\n');
       res.end(sys.inspect(requestData));

       console.log({fields: fields, files: files});
     });
    return;
  });
};
