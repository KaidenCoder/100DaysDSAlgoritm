var merge = function (nums1, m, nums2, n) {
    // nums[1] = [1,2,3,4,5,7] // nums=[2,5,6] -- sorted arrays
    var insertPos = m + n - 1 // 6 - 1 = 5
    m = m - 1 // 3-1 =2
    n = n - 1 // 3-1 = 2
    while (n >= 0) {
        //nums[5] = 3 < 6 = 6 // m=2, n =2, then n-- since nums[m] < nums[n] 
        //nums[4] = 3 < 5 = 5 // m=2, n = 1, then n-- since nums[m] < nums[n]
        //nums[3] = 3 < 2 = 3 // m=2, n = 0, then m-- since nums[m] > nums[n] 
        //nums[2] = 2==2  = 2 // m = 1, n = 0, now n = 0 gets filled in nums1[insertPos] since n cannot be < 0
        //nums[1] = 2         // m = 1 gets filled since nums[m] is already sorted
        //nums[0] = 1         // m = 0 gets filled since nums[m] is already sorted
        nums1[insertPos--] = (m >= 0 && nums1[m] > nums2[n])
            ? nums1[m--]
            : nums2[n--]
    }
    return nums1 // [1,2,2,3,5,6]
}

merge([1, 2, 3, 4, 5, 7], 3, [2, 5, 6], 3)