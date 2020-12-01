// Remove character 
// Remove a from "aabccbaa" 
// Result should be bccb

function removeAllOccurrencesOfChar(str, ch) {
    let res = ""
    let strArray = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ch) {
            res = res + str[i]
        }
    }
    return res;
}

let str = "aabccbaa"
let ch = 'a'
console.log(removeAllOccurrencesOfChar(str, ch))

