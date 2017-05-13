const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], function(err,filesList){
    var filter = process.argv[3];
    if(err) throw err;
    else{
        filesList.map(function(fileName){
            var currentFileExt = path.extname(fileName);
            if(currentFileExt.endsWith(filter)) console.log(fileName);
        });
    }
});