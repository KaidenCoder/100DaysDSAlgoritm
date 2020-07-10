var isPalindrome = function (x) {
    if (x <= 0) {
        return false
    } else {

        let stringConverter = x + ""
        let reversedNumber = stringConverter.split().reverse().join()

        return reversedNumber == x
    }

};

isPalindrome(121)