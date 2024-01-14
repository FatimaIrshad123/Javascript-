function randomNumber(guess){
    var random = Math.round(Math.random() * 10);

        if (random === guess){
            return 'Good Match';
        }
        else {
            return 'Not Matched';
        }
}
var match = randomNumber(5);
console.log(match);