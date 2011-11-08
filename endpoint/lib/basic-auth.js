module.exports =  function(req){
  var header = req.headers.authorization || '',        // get the header
    token = header.split(/\s+/).pop() || '',            // and the encoded auth token
    auth = new Buffer(token, 'base64').toString(),    // convert from base64
    parts = auth.split(/:/),                          // split on colon
    username = parts[0].toString(),
    password = parts[1].toString();
        
    return [username, password];
}
