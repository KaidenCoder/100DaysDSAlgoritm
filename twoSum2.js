// Given an array of integers that is already sorted in ascending order, 
// find  indices of the two numbers such that they add up to a specific target number.

var twoSum = function (numbers, target) { //[2,7,11,15] , target = 9
    let leftIdx = 0
    let rightIdx = numbers.length - 1 //1st -- rightIdx = 4 - 1 = 3 
    while (leftIdx < rightIdx) {
        const currentSum = numbers[leftIdx] + numbers[rightIdx];
        //1st -- numbers[0] + numbers[3] = 2 + 15 = 17 > 9
        //2nd -- numbers[0] + numbers[2] = 2 + 11 = 13 > 9
        //3rd -- numbers[0] + numbers[1] = 2 + 7 = 9 == 9  --- return [0+1,1+1] = [1,2]
        if (currentSum === target) {
            return [leftIdx + 1, rightIdx + 1] // [1,2]
        } else if (currentSum < target) {
            leftIdx++
        } else {
            rightIdx-- //1st -- rightIdx = 3-1 = 2,  2nd -- rightIdx = 2-1 = 1				
        }
    }
    return []
};

twoSum([2, 7, 11, 15], 9)