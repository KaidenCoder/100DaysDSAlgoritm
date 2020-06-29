function reverse(num) {
    if (num < 0) {
        return -1 * reverse(-num)
    }

    let solution = (num + "").split("").reverse().join("");
    if (solution > (Math.pow(2, 31) - 1) || solution < Math.pow(-2, 31)) {

        return 0;
    } else {
        return solution;
    }
}