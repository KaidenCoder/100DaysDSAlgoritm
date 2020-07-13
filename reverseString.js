var reverseString = function (s) { // ['h','e','l','w']
    let i = 0;
    let j = s.length - 1
    let temp = 0
    while (i < j) { // i=0, j=3 -- i=1, j=2 -- i=2, j=1 
        [s[i], s[j]] = [s[j], s[i]]
        // s[0] = w, s[3] = h -- ['w','e','l','h']
        // s[1] = l, s[2]= e  -- ['w','l','e','h']
        // i = 2 > j = 1 -- break the while loop	
        i++ // i = 0, 1, 2
        j-- // j = 3, 2, 1
    }
    return s // ['w','l','e','h']
}

reverseString(['h', 'e', 'l', 'w'])
