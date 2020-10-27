/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let arrnum = [...`${num}`].map(Number)
    for (let i = 0; i < arrnum.length; i++) {
        if (arrnum[i] == 6) {
            arrnum[i] = 9
            break
        }
    }

    let resNum = parseInt(arrnum.join(''))
    return resNum
};
