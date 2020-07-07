const romanToInt = function (s) {
    if (s == null) {
        return -1
    }
    let num = integerConverter(s.charAt(0))
    let pre, curr;

    for (let i = 1; i < s.length; i++) {
        curr = integerConverter(s.charAt(i))
        pre = integerConverter(s.charAt(i - 1))
        if (curr <= pre) {
            num += curr
        } else {
            num = num - pre * 2 + curr
        }
    }
    return num
};

function integerConverter(c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

romanToInt('XI')