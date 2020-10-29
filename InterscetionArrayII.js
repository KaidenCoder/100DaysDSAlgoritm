// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let a = nums1.sort((a, b) => a - b)
    let b = nums2.sort((a, b) => a - b)
    let res = []
    while (a.length && b.length) {
        if (a[0] === b[0]) {
            res.push(a.shift())
            b.shift()
        }
        else if (a[0] > b[0]) {
            b.shift()
        } else {
            a.shift()
        }
    }

    return res
};