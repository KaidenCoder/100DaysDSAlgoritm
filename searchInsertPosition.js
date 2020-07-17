// Search Insert Position

function searchInsert(nums, target) {// ([1,3,5,6],5) -- should return 2
    return binarySearch(nums, target, 0, nums.length - 1)
}

function binarySearch(array, target, start, end) {

    const midPoint = Math.floor((start + end) / 2) // 1st midpoint = Math.floor((0+3)/2) = 1 
    // 2nd midpoint = Math.floor((2+3)/2) = 2
    if (array[midPoint] === target) { // 1st array[1]= 3 !== 5
        return midPoint // 2nd array[2]= 5 == 5 --- return 2
    }
    if (start > end) return start //1st start = 0 < end = 3

    if (array[midPoint] > target) { //1st array[1] = 3 < 5
        return binarySearch(array, target, start, midPoint - 1)
    }

    if (array[midPoint] < target) { //1st array[1] = 3 < 5
        return binarySearch(array, target, midPoint + 1, end)//1st midpoint = 1 + 1 = 2, end = 3
    }

}

searchInsert([1, 3, 5, 6], 5)