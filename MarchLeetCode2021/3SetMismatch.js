var findErrorNums = function (nums) {
    let len = nums.length
    let sum = (len * (len + 1)) / 2
    let s = 0, dup = 0
    let hash = {}
    for (let i of nums) {
        if (hash[i]) {
            dup = i
        } else {
            hash[i] = true
            s += i
        }
    }
    return [dup, sum - s]
};