function findPerfectNumbers(number) {
    var perfectNum = []
    for (i = 1; i < number; i++) {
        var sum = 0
        for (j = 1; j < i; j++) {
            if (i % j === 0) {
                sum = sum + j;
            }
        }
        if (sum === i) {
            perfectNum.push(i)
        }
    } return perfectNum
}

console.log(findPerfectNumbers(1000))