// Rotate Array


// Given an array, rotate the array to the right by k steps, where k is non-negative.


var rotate = function (nums, k) {
    let indicesToRotate = nums.length - k
    let rotatedArray = []
    const splicedArray = nums.splice(-k)
    let lenNums = nums.length

    let ArrayNumsToRotate = nums.splice(0, indicesToRotate)

    for (let j = 0; j < splicedArray.length; j++) {
        rotatedArray.push(splicedArray[j])
    }

    for (let i = 0; i < ArrayNumsToRotate.length; i++) {
        rotatedArray.push(ArrayNumsToRotate[i])
    }

    return rotatedArray

};

rotate([1, 2, 3, 4, 5, 6, 7], 3)