/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    const dir = { 'N': [1, 0], 'S': [-1, 0], 'E': [0, -1], 'W': [0, 1] };
    let [x, y] = [0, 0];
    const seen = new Set(['0,0']);
    const findVisited = p => {
        const curr = `${x += dir[p][0]},${y += dir[p][1]}`

        if (seen.has(curr)) {
            return true
        }
        seen.add(curr)
        return false
    }

    return path.split('').some(findVisited)

};