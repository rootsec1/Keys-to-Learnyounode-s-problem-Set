const http = require('http');

http.createServer(function(request,response){
    if(request.method==='POST'){
        var body = '';
        request.on('data',function(data){
            body+=data;
        });
        request.on('end',function(){
            body = body.toUpperCase();
            response.writeHead(200, {'Content-Type':'text/plain'});
            response.write(body);
            response.end();
        });
    }
}).listen(Number(process.argv[2]));