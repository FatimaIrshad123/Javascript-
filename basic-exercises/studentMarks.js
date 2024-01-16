function students(subject,marks){
    if (marks >= 90){
        if (marks >= 90 && subject == 'math'){
            return 'Grade A';
        }
        else {
            return 'Grade A+'
        }
    }
    else if (marks < 90 && marks >= 80){
            if (subject == 'urdu' || subject == 'english'){
                return 'Grade B';
            }
            else {
                return 'Grade B+'
            }
        }
        else if (marks <= 80 && marks >= 50){
                return 'Grade C';
            }
    
        else {
            return 'Grade F';
        };
}
console.log(students('physics',90));
console.log(students(45));
console.log(students('math',87));
console.log(students('urdu',75));
