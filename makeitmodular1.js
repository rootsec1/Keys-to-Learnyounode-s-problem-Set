const fs = require('fs');
const path = require('path');

module.exports = function(dirPath, filter, callback){
    filter = '.'+filter;
    fs.readdir(dirPath, function(err,filesList){
        if(err) return callback(err);
        else{
            filesList = filesList.filter(function(fileName){
                if(path.extname(fileName)===filter) return filesList;
            });
            return callback(null, filesList);
        }
    });
};