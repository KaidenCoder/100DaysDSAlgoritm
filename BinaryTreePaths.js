// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let paths = []
    contruct_path(root, "", paths)
    return paths
};


function contruct_path(root, path, paths) {
    if (root != null) {
        path += root.val.toString()
        if ((root.left == null) && (root.right == null)) {
            paths.push(path)
        } else {
            path += "->"
            contruct_path(root.left, path, paths)
            contruct_path(root.right, path, paths)
        }
    }
}