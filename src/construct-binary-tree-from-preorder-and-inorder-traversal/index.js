/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const find = (preorder, inorder) => {
        const root = preorder[0]
        const i = inorder.indexOf(root)
        const leftI = inorder.slice(0, i)
        const rightI = inorder.slice(i + 1)
        const leftP = preorder.slice(1, leftI.length + 1)
        const rightP = preorder.slice(1 + leftI.length)
        return {
            val: root,
            left: leftP.length ? find(leftP, leftI) : null,
            right: rightP.length ? find(rightP, rightI) : null
        }
    }
    return find(preorder, inorder)
};