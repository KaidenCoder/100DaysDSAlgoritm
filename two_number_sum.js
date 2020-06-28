function twoNumberSum(arr, targetSum) {
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
        const firstNum = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            const secondNum = arr[j]
            if (firstNum + secondNum === targetSum) {
                result.push(firstNum)
                result.push(secondNum)
                return `The two numbers are 
                  ${result} and their targetSum is 
                  ${targetSum}`
            }
        }
    }
    return []
}
