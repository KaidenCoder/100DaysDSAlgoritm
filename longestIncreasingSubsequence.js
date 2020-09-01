// 674. Longest Continuous Increasing Subsequence


var findLengthOfLCIS = function (nums) {
    let count = 1
    let maxCount = 0
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i]
        let nextNum = nums[i + 1]
        if (firstNum < nextNum) {
            count++
        } else {
            count = 1
        }
        maxCount = Math.max(count, maxCount)
    }
    return maxCount
};