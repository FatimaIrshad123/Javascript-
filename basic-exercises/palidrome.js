var string1 = '1 , 7,7,1';
var string = string1.replaceAll(" ","");
console.log('string: '+string)

var str = string.split(",");
console.log("str :" +str);


var rever = str.reverse();
console.log('reverse : ' +rever);

if (str == rever){
    console.log('It is plandromic sequence');
}
else{
    console.log('It is not a palindromic sequence ');
}


