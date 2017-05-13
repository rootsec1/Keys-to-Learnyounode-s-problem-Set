const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function(response){
    response.pipe(bl(function(err,data){
      if(err)   throw err;
      else{
          data = data.toString();
          console.log(data.length);
          console.log(data);
      }  
    }));
});