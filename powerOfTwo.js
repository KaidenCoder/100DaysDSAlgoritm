var isPowerOfTwo = function (n) {
    if (n < 1) return false

    while (n > 2 && n % 2 == 0) {
        // if n is a multiple of 2, keep on divinding by 2 
        n /= 2
        // until n = 2
    }


    if (n == 2 || n == 1) {
        return true
    } else {
        return false
    }
};