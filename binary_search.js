const search = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        const num = array[i]
        if (num == target) {
            return i
        }
    }
    return -1
}