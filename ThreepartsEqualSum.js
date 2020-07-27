//Partition Array Into Three Parts With Equal Sum

var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((accum, currentNum) => accum + currentNum, 0) / 3
    let s = 0, count = 0
    for (let i = 0; i < A.length; i++) {
        s += A[i]
        if (s === sum) {
            count++
            s = 0
        }
    }
    return count >= 3
};