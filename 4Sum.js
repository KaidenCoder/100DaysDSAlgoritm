// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = []

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1

            while (low < high) {
                let sum = nums[i] + nums[j] + nums[low] + nums[high]
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]])
                    while (nums[low] === nums[low + 1]) low++
                    while (nums[high] === nums[high - 1]) high--
                    low++
                    high--
                } else if (sum < target) {
                    low++
                } else {
                    high--
                }
            }
            while (nums[j] === nums[j + 1]) j++
        }
        while (nums[i] === nums[i + 1]) i++
    }
    return result
};