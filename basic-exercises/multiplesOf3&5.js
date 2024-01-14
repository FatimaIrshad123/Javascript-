
var three = [1];
var five = [1];
var num = 30;

for (var mul = 3; mul < num; mul ++){
    if (num % mul == 0){
        three.push(mul);
    }
}
for (var mul = 5; mul < num; mul ++){
    if (num % mul == 0){
        five.push(mul)
    }
}

var sumOfMultiplesOfThree = 0;
var sumOfMultiplesOffive = 0;

for (var x in three){
    sumOfMultiplesOfThree += three[x];
}

for (var y in five){
    sumOfMultiplesOffive += five[y];
}
console.log('Multiples of three : '+three);
console.log('Multiples of Five : '+five);

console.log('Length of Multiple of 3 Array : '+three.length);
console.log('Length of Multiple of 5 Array : '+five.length);


console.log('sum Of Multiples Of Three : ' +sumOfMultiplesOfThree);
console.log('sum Of Multiples Of Five : ' +sumOfMultiplesOffive);

