const romanToInt = function (s) {   // s = IV
    if (s == null) {
        return -1
    }
    let num = integerConverter(s.charAt(0)) // num = I == 1
    let pre, curr;

    for (let i = 1; i < s.length; i++) {
        curr = integerConverter(s.charAt(i)) // curr = V == 5
        pre = integerConverter(s.charAt(i - 1)) // pre = I == 1
        if (curr <= pre) { // curr = 5 > pre = 1 -- going to else
            num += curr
        } else {
            num = num - pre * 2 + curr // num = 1 - 1*2 + 5 = 6 - 2 = 4
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

romanToInt('IV')