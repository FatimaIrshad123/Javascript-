function findgrade(score){
    if(score > 80 && score <= 100){
        console.log('Grade A');
    } 
    else if(score <= 80 && score > 70){
        console.log('Grade B');
    }
    else{
        console.log("Grade C");
    }
}

var score1 = calculatescore(45,90,78);
var score2 = calculatescore(98,67,78);

console.log("avg score :" +score1);
console.log("avg score :" +score2);

findgrade(score1);
findgrade(score2);
