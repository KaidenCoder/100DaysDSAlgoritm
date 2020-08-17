// Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

// Example 1:

// Input: [3, 1, 4, 1, 5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.


var findPairs = function (nums, k) {
    let newNums = nums.sort((a, b) => a - b) // sorting in ascending
    let res = []
    for (let i = 0; i < newNums.length - 1; i++) {
        const firstNum = newNums[i]
        for (let j = i + 1; j < newNums.length; j++) {
            const secondNum = newNums[j]
            if (Math.abs(firstNum - secondNum) === k) {
                res.push([firstNum, secondNum]) // push if difference == k
            }
        }
    }
    let newRes = res.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i + 1) === -1;
    }).reverse().map(JSON.parse)  // Removing duplicate items from res(2d array)

    return newRes.length // return the length of the newRes
};