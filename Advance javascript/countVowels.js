function countVowels(str) {
    var vowels = [];
    for (var x in str) {
        if (str[x] === 'a' || str[x] === 'e' || str[x] === 'i' || str[x] === 'o' || str[x] === 'u') {
            vowels.push(str[x]);
        }
    }
    console.log(vowels);
}
countVowels('fatima');
