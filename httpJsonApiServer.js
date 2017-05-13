const http = require('http');
var url = require('url');

http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type':'application/json'});
    var parts = url.parse(request.url, true);
    var query = parts.query;
    var queryISO = query.iso;
    var date = new Date(queryISO);
    if(request.url.substring(0,request.url.indexOf('?'))==='/api/parsetime'){
        var jsonToSend = {
            'hour':date.getHours(),
            'minute':date.getMinutes(),
            'second': date.getSeconds()
        };
    }
    else if(request.url.substring(0,request.url.indexOf('?'))==='/api/unixtime'){
        var jsonToSend = {};
        jsonToSend.unixtime = parseInt(Math.round(date.getTime()));
    }
    response.write(JSON.stringify(jsonToSend));
    response.end();
}).listen(process.argv[2]);
