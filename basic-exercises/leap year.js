var input = prompt('Enter Year : ');
console.log('User Input : ' ,input);
var result = input % 4;
if (result == 0){
    console.log(input+ " is leap year");
}
else {
    console.log(input+ " is not leap year");
}

