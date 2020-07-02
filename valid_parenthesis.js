function isValid(s) {
    let bracket = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = []

    for (let paranthesis of s) {
        // checking if the given paranthesis is present in the bracket
        // if paranthesis is present in the bracket, then add the value of the key to the stack
        if (bracket[paranthesis]) {
            stack.push(bracket[paranthesis])
        } else {
            // checking if the last value of stack is equal to the first value of s
            if (stack.pop() !== paranthesis) {
                return false
            }
        }
    }
    // boolean of value 0 return false
    // boolean of all values except 0 returns true
    // boolean of value !0 return true

    // The length of the stack should return zero to be true
    return (!stack.length)
}