var distributeCandies = function (candyType) {
    let totalcandies = [... new Set(candyType)]
    let olen = candyType.length;
    let elen = totalcandies.length
    let diff = (olen / 2) - elen

    if (elen <= olen / 2) {
        return elen
    }

    if (elen > olen / 2) {
        return olen / 2
    }
    return elen
};