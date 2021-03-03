var calculateTime = function (keyboard, word) {
    let a = keyboard.split('')
    let b = word.split('')
    let sum = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                sum.push(j)
            }

        }
    }
    let result = sum[0]

    for (let i = 1; i < sum.length; i++) {
        let diff = Math.abs(sum[i - 1] - sum[i])
        result += diff
    }

    return result

};