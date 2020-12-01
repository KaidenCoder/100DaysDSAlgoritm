// Remove Consecutive Duplicates 
// For a given string(str), remove all the consecutive duplicate characters.
// Result should be "abcba", str = "aabccbaa"

function removeConsecutiveDuplicates(str) {
    let res = ""

    res = res + str[0]

    let j = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[j] != str[i]) {
            j = i;
            res = res + str[j]
        }
    }

    return res;
}

let str = "aabccbaa"
console.log(removeConsecutiveDuplicates(str))

