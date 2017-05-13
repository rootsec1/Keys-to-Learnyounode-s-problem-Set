arr = process.argv;
var sum = 0;
arr.map(function(element,i){
    if(i>=2){
        sum+=Number(element);
    }
});
console.log(sum);