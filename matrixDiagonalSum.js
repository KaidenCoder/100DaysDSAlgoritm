// Example 1:

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.



/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let s = 0
    for (let i = 0; i < mat.length; i++) {
        s = s + mat[i][i]
        //  console.log(mat[i][i])
    }
    for (let i = mat.length - 1; i >= 0; i--) {
        s = s + mat[(mat.length - 1) - i][i]
        // console.log(mat[(mat.length-1)-i][i])
    }
    if (mat.length % 2 != 0) {
        let middle = Math.round((mat.length - 1) / 2);
        return s - mat[middle][middle]
    } else {
        return s
    }
};