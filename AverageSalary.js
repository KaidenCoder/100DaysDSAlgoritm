// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500


/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    salary.sort(function (a, b) { return a - b });
    let sum = 0
    let count = 0
    if (salary.length == 3) {
        return salary[1]
    }
    else {
        for (let i = 1; i < salary.length - 1; i++) {
            count = count + 1
            sum = sum + salary[i]
        }
    }
    return sum / count
};