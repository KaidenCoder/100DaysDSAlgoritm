

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.



/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
    const VOWEL = new Set(['a', 'e', 'i', 'o', 'u'])
    let max = 0
    for (let i = 0; i < k; ++i) {
        VOWEL.has(s[i]) && ++max
    }
    for (let i = 0, cur = max; i < s.length - k; ++i) {
        VOWEL.has(s[i]) && --cur;
        VOWEL.has(s[i + k]) && ++cur;
        cur > max && (max = cur)
    }
    return max
};