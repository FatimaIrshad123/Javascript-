var date = new Date();
var day = date.getDay();

const dayname = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var nameOfDay = dayname[day];
console.log('Today Is : ' +nameOfDay);

var hours = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

if (hours <= 12){
     hours = hours && hours +' AM';
}
else {
    hours = hours - 12;
    hours = hours + ' PM';
}

console.log('Current Time is : '+hours+ ' : ' +minute+ ' : ' +second);
