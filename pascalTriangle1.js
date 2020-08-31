var generate = function (numRows) {
    let pascal = []
    for (let i = 0; i < numRows; i++) {
        pascal[i] = []
        pascal[i][0] = 1
        for (var j = 1; j < i; j++) {
            // pascal[0][1] -- false since j > i
            // pascal[1][1] -- false since j > i
            // [2][1] = [1][0] + [1][1]
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]

        }
        pascal[i][i] = 1
    }
    return pascal
};