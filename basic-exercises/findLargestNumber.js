function findLargestElement(numbers) {
    var largest = 0;
    for (var i in numbers) {
        if (numbers[i] > largest) {
            var largest = numbers[i];
        }
    }
    console.log(largest);
}
findLargestElement([8.9, 2, 65.4, 400.9, 56]);
findLargestElement([3.5, 7.2, 2.1, 9.8, 1.9]);
module.exports = findLargestElement;
