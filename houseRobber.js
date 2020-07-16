// House Robber
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//             Total amount you can rob = 1 + 3 = 4.

var rob = function (nums) { // [2,5,3,4,2]  ---- Max I can rob is 9
    if (!nums.length) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) { // i < 5
        // nums[2] = Math.max(2+3,0+3) = 5 -- [2,5,5,4,2]
        // nums[3] = Math.max(5+4,2+4) = 9 -- [2,5,5,9,2]
        // nums[4] = Math.max(5+2,5+2) = 7 -- [2,5,5,9,7]
        nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i])
    }
    // nums = [2,5,5,9,7]
    // return Math.max(7,9) = 9
    return Math.max(nums[nums.length - 1], nums[nums.length - 2])

};

rob([2, 5, 3, 4, 2])

