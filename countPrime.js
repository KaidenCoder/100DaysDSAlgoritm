//Count the number of prime numbers less than a non-negative number, n.
var countPrimes = function (n) { // n = 10
    let nums = []
    let primeCount = 0
    for (let i = 0; i < n; i++) {
        nums[i] = true
    }

    for (let i = 2; i * i < n; i++) { // i = 2,3 since 3*3 = 9 < 10
        if (nums[i] === true) {
            for (let j = 2; j * i < n; j++) {
                // 2*2 = 4, 2*3= 6, 3*3 = 9, 4 *2 = 8 (4*3 > 10 -- break)
                nums[j * i] = false // 4,6,9

            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (nums[i] == true) {
            //remaining are 2,3,5,7 -- total = 4
            primeCount++
        }
    }
    return primeCount // 4 
}

countPrimes(10)