formidable =  require("formidable");

module.exports = function(routes, Transitive){
  routes.post("/", function(req, res){
    var form = new formidable.IncomingForm();
     form.parse(req, function(err, fields, files) {
       if(err){
         res.writeHead(500, {'content-type': 'text/plain'});
         res.write("Server Error.\n\n");
         res.end();
         return;
       }

       res.writeHead(200, {'content-type': 'text/plain'});
       res.write('received upload:\n\n');
       res.end(sys.inspect({fields: fields, files: files}));
       console.log({fields: fields, files: files});
     });
    return;
  });
};