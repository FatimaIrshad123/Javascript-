function number(n){
    if (n%3 == 0){
        console.log('Fizz');
    }
    else if (n % 5 == 0){
        console.log('Buzz');
    }
    else if (n % 3 == 0 & n % 5 == 0){
        console.log('FizzBuzz');
    }
    else {
        console.log('none');
    }
}
number(6);
number(15);
number(10);
number(4);