// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]



/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let max = 0;
    let row = matrix[0].length
    let col = matrix.length
    let res = []
    let idx = []
    let i, j;

    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            max = Math.max(max, matrix[j][i])
        }
        res.push(max)
        max = 0
    }

    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            if (matrix[j][i] == res[i]) {
                idx.push(j)
            }
        }
    }

    let maxRes = []
    let finalRes = []
    for (let k = 0; k < res.length; k++) {
        for (let m = 0; m < res.length; m++) {
            if (res[k] < matrix[idx[k]][m]) {
                maxRes.push(res[k])
            }
        }

        if (maxRes.length == row - 1) {
            finalRes.push(res[k])
            return finalRes
        }
        maxRes = []
    }

    return []

};