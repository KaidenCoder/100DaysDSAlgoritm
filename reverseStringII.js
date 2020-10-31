// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

// Example:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    if (k > s.length) {
        return s.split('').reverse().join('')
    }

    const s_split = s.split('')

    for (let i = 0; i < s.length; i += 2 * k) {
        const reverse = s_split.splice(i, k).reverse()
        s_split.splice(i, 0, ...reverse)
    }

    return s_split.join('')

};