var num3 = 7 ;
var isprime = true;

for (var j = 2; j < num3; j++)
{var result = num3 % j; 
    if(result == 0){console.log("no. is not prime = " +num3 +" j "+j);
    isprime = false;
    break;}
   else{console.log("no. is prime = " + num3);
    break;}
}
if(isprime == true){console.log("no. is prime " +num3)}
