var buildTree = function(preorder, inorder) {
    const pos = new Map();
    for (let i = 0; i < inorder.length; i++) pos.set(inorder[i], i);
    let pre = 0;
    const build = (left, right) => {
        if (left > right) return null;
        const val = preorder[pre++];
        const node = new TreeNode(val);
        const mid = pos.get(val);
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    };
    return build(0, inorder.length - 1);
};
