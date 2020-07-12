var maxProfit = function (prices) { // prices = [7,1,5,3,6,4]
    var min = Number.MAX_SAFE_INTEGER;
    var max = 0;
    //0,1,2,3,4,5 -- value of i < 6
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        //(min, 7) -- min = 7
        //(7,1) -- min = 1
        //(1,5) -- min = 1
        //(1,3) -- min = 1
        //(1,6) -- min = 1
        //(1,4) --- min = 1
        max = Math.max(max, prices[i] - min);
        // (0, 7-7) -- max = 0
        // (0, 1-1) -- max = 0
        // (0, 5-1) -- max = 4
        // (4, 3-1) -- max = 4
        // (4, 6-1) -- max = 5
        // (5, 4-1) -- max = 5
    }
    return max;
};

maxProfit([7, 1, 5, 3, 6, 4])