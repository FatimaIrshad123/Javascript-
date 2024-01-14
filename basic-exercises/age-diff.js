var inp = prompt('Enter age:');
console.log("User Input:" +inp);
var d3 = new Date()
var year = d3.getFullYear();
console.log(year);
var birthyear = year - inp;
console.log("Birth year:" +birthyear);


var currentdate = new Date();
console.log("Current Date:" +currentdate);
var after = currentdate.setHours(20);
console.log('New Date:' +after);