// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2

// Given tree t:

//    4 
//   / \
//  1   2

// Return true, because t has the same structure and node values with a subtree of s.







/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    return traverse(s, t)
};


function equals(x, y) {
    if (x == null && y == null) {
        return true
    }
    if (x == null || y == null) {
        return false
    }
    return x.val == y.val && equals(x.left, y.left) && equals(x.right, y.right)
}

function traverse(s, t) {
    return s != null && (equals(s, t) || traverse(s.left, t) || traverse(s.right, t))
}