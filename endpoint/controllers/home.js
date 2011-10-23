formidable =  require("formidable");
msgpack = require("msgpack2");
newId = require("uuid-pure").newId;

module.exports = function(routes, Transitive){
  var q = Transitive.app.bulkQueue;

  routes.post("/", function(req, res){
    var form = new formidable.IncomingForm();
    form.uploadDir = Transitive.options.root + '/tmp';
    
     form.parse(req, function(err, fields, files) {
       var id = newId();
       if(err){
         res.writeHead(500, {'content-type': 'text/plain'});
         res.write("Server Error.\n\n");
         res.end();
         return;
       }

       var shallowFiles = {}, f;
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