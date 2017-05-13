const http = require('http');
const bl = require('bl');

process.argv.slice(2).map(function(url){
    http.get(url, function(response){
        var currentUrlData = "";
        response.setEncoding('utf8');
        response.on('data',function(data){
            currentUrlData+=data;
        });
        response.on('end',function(){
            console.log(currentUrlData);
        });
    });
});
