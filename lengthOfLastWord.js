var lengthOfLastWord = function (s) {
    let a = s.trim() // removes the last blank spaces
    let b = a.split(" ") // converts a into array of strings 
    let c = b.pop() // remove the last string in the array
    let d = c.length // calculate the length of c
    return d
};

lengthOfLastWord("Hello World ")