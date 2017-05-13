const fs = require('fs');
var content = fs.readFileSync(process.argv[2]);
content = content.toString();
var newLines = content.split('\n').length-1;
console.log(newLines);