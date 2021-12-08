function primeNumber(input) {

    for (var num = 2; num <= input; num++) {
        let flag = 0;

        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = 1
                break
            }
        }
        if (flag === 0) {
            console.log(num + " ")
        }
    }
}
primeNumber(1000)