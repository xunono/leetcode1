var recoverTree = function(root) {
    let prev = null;
    let first = null;
    let second = null;
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        if (prev && prev.val > node.val) {
            if (!first) first = prev;
            second = node;
        }
        prev = node;
        dfs(node.right);
    };
    dfs(root);
    const tmp = first.val;
    first.val = second.val;
    second.val = tmp;
};
