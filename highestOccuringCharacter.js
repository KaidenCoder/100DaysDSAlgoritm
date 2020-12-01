// Highest Occuring Character 
// For a given a string(str), find and return the highest occurring character.
// Result should be b, str = "abdefgbabfba"

function highestOccuringChar(str) {
    let res = ""
    let count = {}

    for (let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
    }

    let max = -1
    for (let i = 0; i < str.length; i++) {
        if (max < count[str[i]]) {
            max = count[str[i]]
            res = str[i]
        }
    }
    return res;
}

let str = "abdefgbabfba"
console.log(highestOccuringChar(str))

