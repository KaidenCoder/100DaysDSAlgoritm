
//Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
var plusOne = function (digits) { // [6,1,8]
    for (var i = digits.length - 1; i >= 0; i--) { 	 // i = 3-1 = 2 	
        digits[i]++; // digits[2] = 8 + 1 = 9 
        // if condition
        if (digits[i] > 9) { // 9 is not greater than 9, go to else
            digits[i] = 0; // if 0, then i -- and add 1 to it
            if (digits[0] == 0) { // eg: digits = [9,9]
                digits.unshift(1); // add 1 before digits, then digits = [1,0,0]
            }
            // else condition  
        } else {
            return digits; // [6,1,9]
        }
    }
    return digits;
};

plusOne([9, 9])







    //var plusOne = function(digits) {
    //    let x = digits.toString();
      //	const re = /[\W_]/g
       // let s = x.replace(re,"")
       // let t = s*1
       // let u = t + 1
        //	let d = (""+u).split("");
       // return t
    //};