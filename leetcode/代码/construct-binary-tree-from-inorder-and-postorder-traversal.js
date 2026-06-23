var buildTree = function(inorder, postorder) {
    const pos = new Map();
    for (let i = 0; i < inorder.length; i++) pos.set(inorder[i], i);
    let post = postorder.length - 1;
    const build = (left, right) => {
        if (left > right) return null;
        const val = postorder[post--];
        const node = new TreeNode(val);
        const mid = pos.get(val);
        node.right = build(mid + 1, right);
        node.left = build(left, mid - 1);
        return node;
    };
    return build(0, inorder.length - 1);
};
