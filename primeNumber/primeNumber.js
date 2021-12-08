function findPrimeNumbers(...numbers) {
    var prime = {}
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i]
        for (var j = 2; j < num; j++) {
            var flag = 0;
            if (num % j == 0) {
                flag = false
                break
            }

        }

        prime[num] = flag;
    }

    return prime
}

console.log(findPrimeNumbers(6, 9, 7, 10))