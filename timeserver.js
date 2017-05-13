const net = require('net');
var date = new Date();
net.createServer(function(socket){
    var month = Number(date.getMonth())+1;
    if(month<=9)    month='0'+month;
    var messageToWrite = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+'\n';
    socket.setEncoding('utf8');
    socket.write(messageToWrite);
    socket.end();
}).listen(Number(process.argv[2]));