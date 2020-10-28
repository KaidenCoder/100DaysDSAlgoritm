// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let res = []
    res.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        res.push(res[i - 1] + nums[i])
    }
    return res
};