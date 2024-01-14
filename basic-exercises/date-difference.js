var d1 = new Date("june 14 2019 10:15:20");
var d2 = new Date("june 28 2019 10:15:20");
var diff = d2.getTime() - d1.getTime();
console.log(diff);
var days = diff / (60*60*24*1000);
console.log(days);