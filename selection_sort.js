function selectionSort(array) {
    // Write your code here.
    let currentIdx = 0
    // 0 < 2
    // 1 < 2
    while (currentIdx < array.length - 1) {
        //smallest = 0
        // smallest = 1
        let smallestIdx = currentIdx
        //i = 1, i < 3
        // i = 2, i < 3
        for (let i = currentIdx + 1; i < array.length; i++) {
            // 8 > 2
            //// 2 > 5 -- false
            // 8 > 5
            if (array[smallestIdx] > array[i]) {
                // smallestIdx = 1
                // smallestIdx = 2
                smallestIdx = i
            }
        }
        // 0, 1
        //// [2,8,5]
        // 1, 2
        //// [2,5,8]
        swap(currentIdx, smallestIdx, array)
        // currentIdx = 0 + 1 = 1
        currentIdx += 1
    }
    return array
}

function swap(i, j, array) {
    // temp = 8, array[0] = 2, array[1] = 8
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

selectionSort([8, 2, 5])