function friendNumbers(num1, num2) {
    var sum1 = 0, sum2 = 0, i

    for (i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            sum1 = sum1 + i
        }
    }

    for (i = 1; i < num2; i++) {
        if (num2 % i === 0) {
            sum2 = sum2 + i
        }
    }

    if (num1 == sum2 && num2 == sum1) {
        console.log("numbers are Friend numbers")
    } else {
        console.log("numbers are not Friend numbers")
    }
}

console.log(friendNumbers(20, 30))