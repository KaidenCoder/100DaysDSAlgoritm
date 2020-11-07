// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5 % and the largest 5 % of the elements.

// Example 1:

// Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

// Example 2:

// Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
// Output: 4.00000


/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort((a, b) => a - b)

    const extra = arr.length / 20

    let total = 0

    for (let i = extra; i < arr.length - extra; i++) {
        total += arr[i]
    }


    return total / (arr.length - 2 * extra)


};