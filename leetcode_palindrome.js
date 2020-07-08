// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

var isPalindrome = function (s) {
    const re = /[\W_]/g
    const lowStr = s.toLowerCase().replace(re, '')
    const reversedStr = lowStr.split('').reverse().join('')
    return reversedStr === lowStr
};
