// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.


var frequencySort = function (nums) {
    const map = new Map()
    for (let n of nums) {
        map.set(n, (map.get(n) + 1) || 1)
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
};