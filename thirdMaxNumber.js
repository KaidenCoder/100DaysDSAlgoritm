// Given a non-empty array of integers, return the third maximum number in this array. 
// If it does not exist, return the maximum number. 

// Example 1:
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

var thirdMax = function (nums) {
    var sortedArray = nums.sort((a, b) => b - a) // sort in descending order
    let mySet = new Set(sortedArray) // remove duplicate elements
    let setToSortedArray = [...mySet]; // convert to sorted array again
    if (setToSortedArray.length < 3) {
        return `Answer: Maximum number is ${setToSortedArray[0]}` //  return max
    }

    return `Answer : Third max number is ${setToSortedArray[2]}`  // return third max
};

thirdMax([1, 5, 2, 3, 4, 4, 4, 5, 6])