// Compress the String 
// If a string has 'x' repeated 5 times, replace this "xxxxx" with "x5".
// Result should be 4, str = "aaabbccdsa"

function nonPlaindrome(str) {
    let strArray = str.split("")
    let strLength = str.length

    let i = 0;
    while (i < strLength) {
        if (strArray[i] == strArray[strLength - 1]) {
            i = i + 1
        } else {
            break
        }
    }
    let res = strLength - i
    return res;
}

let str = "abcba"
console.log(nonPlaindrome(str))

