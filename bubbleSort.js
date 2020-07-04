function bubbleSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // 3 > 0
            if (array[i] > array[j]) {
                // temp = 3
                // array[0] = 0
                // array[1] = 3
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }

    }
    return array
}

bubbleSort([3, 0, 2, 5, -1, 4, 1])