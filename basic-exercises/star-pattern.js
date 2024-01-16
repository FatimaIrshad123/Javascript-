
var star1 = '';
for(var j = 1; j <= 6; j++){
    star1 += " " .repeat(6-j)
    star1 += "*" .repeat(j+j-1)+'\n'
    
}
console.log(star1);