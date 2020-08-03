// 1150. Check If a Number Is Majority Element in a Sorted Array
// Easy

// Given an array nums sorted in non-decreasing order, and a number target, return True if and only if target is a majority element.

// A majority element is an element that appears more than N/2 times in an array of length N.



// Example 1:

// Input: nums = [2,4,5,5,5,5,5,6,6], target = 5
// Output: true
// Explanation: 
// The value 5 appears 5 times and the length of the array is 9.
// Thus, 5 is a majority element because 5 > 9/2 is true.


var isMajorityElement = function (nums, target) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            count++
        }
    }

    return count > (nums.length / 2)
};