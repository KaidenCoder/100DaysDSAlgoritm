// 1085. Sum of Digits in the Minimum Number
// Easy

// Given an array A of positive integers, let S be the sum of the digits of the minimal element of A.

// Return 0 if S is odd, otherwise return 1.


var sumOfDigits = function (A) {
    let sortedArray = A.sort((a, b) => a - b)
    let smallestNum = sortedArray[0] + ''
    let sum = 0
    for (let i = 0; i < smallestNum.length; i++) {
        sum = sum + parseInt(smallestNum[i])
    }
    if (sum % 2 == 0) {
        return 1
    } else {
        return 0
    }
};

sumOfDigits([99, 77, 33, 66, 55])