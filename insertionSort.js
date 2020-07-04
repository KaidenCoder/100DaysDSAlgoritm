function insertionSort(array) {
    // Write your code here.
    for (let i = 1; i < array.length; i++) {
        // j =1
        // j = 2
        let j = i // Original array - [2,5,1]
        // j > 0 && array[0] = 2 > array[1] = 5 -- false
        // j > 0 && array[1] = 5 > array[2] = 1 -- true
        //// j > 0 && array[0] = 2 > array[1] = 1 -- true
        while (j > 0 && array[j - 1] > array[j]) {
            // 2,1,5 --- new array
            // 1,2,5 --- new array
            swap(j, j - 1, array)
            // j = 1
            // j = 0 --- does not pass while loop
            j -= 1;
        }
    }
    // 1,2,5
    return array
}
function swap(i, j, array) {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
}

insertionSort([2, 5, 1])