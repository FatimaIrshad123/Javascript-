const userDateOfBirth = new Date('04 18 2006');
const currentdate = new Date();

console.log(userDateOfBirth.getDate());
console.log(currentdate);


const yeardifference = currentdate.getFullYear() - userDateOfBirth.getFullYear();
const monthdifference = currentdate.getMonth() - userDateOfBirth.getMonth();
const daysdifference = currentdate.getDate() - userDateOfBirth.getDate();
const date = Number(daysdifference)*-1;


console.log(yeardifference+ 'years' , monthdifference+'Month', date+ 'Days');