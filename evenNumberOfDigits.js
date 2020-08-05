// Find Numbers with Even Number of Digits

// Example 1:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

var findNumbers = function (nums) {
    let num = nums.join().split(',')  // convert int-array to string-array
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if ((num[i].length % 2) === 0) { // length of each digit check
            count += 1
        }
    }
    return count
};

findNumbers([12, 342, 23, 22])