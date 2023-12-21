var array = [2,6,9,10,8,40,13,3];
var filter = [];

for(var x = 0; x < array.length ; x++){
    if (array[x] % 2 == 0){
        filter.push(array[x]);
        
    }

}
console.log(filter)