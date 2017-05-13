const http = require('http');
const fs = require('fs');

var port = Number(process.argv[2]);
var pathToFile = process.argv[3];

var fileStream = fs.createReadStream(pathToFile, 'utf8');
http.createServer(function(request,response){
    fileStream.pipe(response);
}).listen(port);