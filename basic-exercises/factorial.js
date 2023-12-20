function factorial(n){
        if (n <= 1){
            return 1;
        }
        else {

            return n * factorial (n-1);
        }
    }


console.log(factorial(2));

const one = () => console.log('ONE');
const two = () => console.log('TWO');
const three = () => {
    console.log('THREE');
    one();
    two();
}
const four = () => {
    console
}
three();