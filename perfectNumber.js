var checkPerfectNumber = function (num) {
    if (num <= 0) {
        return false
    }
    let divisor = []
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            divisor.push(i)
        }
    }
    let addSum = divisor.reduce((a, b) => a + b, 0)
    if (addSum == num) {
        return true
    } else {
        return false
    }
};