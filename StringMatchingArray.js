/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words.sort(function(a, b){
  return a.length - b.length;
});

let res = []


for(let i = 0; i < words.length-1; i++){
    for(let j = words.length -1; j>=0; j--){
        if(words[j].includes(words[i]) && words[j] !== words[i]){
                res.push(words[i])
    }
    }
    
}
    let sett = new Set(res)
let newRes = [...sett]
return newRes
};