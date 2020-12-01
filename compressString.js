// Remove character 
// Remove a from "aabccbaa" 
// Result should be a3b2c2d1s1a1, str = "aaabbccdsa"

function getCompressedString(str) {
    let res = ""
    let strArray = str.split("")
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (i + 1 < str.length && str[i] == str[i + 1]) {
            i++
            count++
        }

        res = res + str[i] + count
    }
    return res;
}

let str = "aaabbccdsa"
console.log(getCompressedString(str))
