/**
 * 
 * @param {Example 1:

Input: 
Height : 5
Width : 7
Tree position : [2,2]
Squirrel : [4,4]
Nuts : [[3,0], [2,5]]
Output: 12} height 
 * @param {*} width 
 * @param {*} tree 
 * @param {*} squirrel 
 * @param {*} nuts 
 */

var minDistance = function (height, width, tree, squirrel, nuts) {
    let firstPath = -Infinity
    let totalDist = 0

    let findDist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    // (4 - 3) + (4 - 0) = 1 + 4 = 5
    // (2 - 3) + (2 - 0) = 1 + 2 = 3

    // (4 - 2) + (4 - 5) = 2 + 1 = 3
    // (2 - 2) + (2 - 5) = 0 + 3 = 3

    for (let nut of nuts) {
        const toSq = findDist(squirrel, nut) // 5, 3
        const toTree = findDist(tree, nut) // 3, 3

        firstPath = Math.max(firstPath, toTree - toSq) // -2, 0

        totalDist += toTree * 2 // 2 * 3 = 6 // 6 + (2 * 3) = 6 + 6 = 12
    }

    return totalDist - firstPath // 12 - 0 = 12
};