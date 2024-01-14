var score = prompt("What is your score" );
if ( score >= 80 && score <=100) 
{console.log("Grade A");
    if(score >= 90){console.log("Grade A+");}
    else{console.log("Grade A-");}
}

else if (score > 70)
{console.log("Grade B");}
else if (score > 60)
{console.log("Grade C");}
else {console.log("Failed");}