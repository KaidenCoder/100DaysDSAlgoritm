//Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
            return i
        }
    }
    return -1
};