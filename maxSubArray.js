function maxSubArray(nums) {
    let solution = nums[0]
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        solution = Math.max(solution, nums[i])
    }
    return solution
}

maxSubArray([4, -3, 5, 5, -9, -1, 2, 8, 4, -5])