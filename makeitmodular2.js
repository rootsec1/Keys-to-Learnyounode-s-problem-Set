
var makeitmodular1 = require('./makeitmodular1');
makeitmodular1(process.argv[2],process.argv[3], function(err, filesList){
    if(err) throw err;
    else{
        filesList.map(function(element){
            console.log(element);
        });
    }
});