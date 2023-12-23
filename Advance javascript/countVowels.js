function countVowels(str) {
    var vo = [];
    for (var x in str) {
        //console.log(str[x])
        if (str[x] === 'a' || str[x] === 'e' || str[x] === 'i' || str[x] === 'o' || str[x] === 'u') {
            vo.push(str[x]);
        }
    }
    console.log(vo);
}
countVowels('fatima');
