var binaryTreePaths = function(root) {
    if (!root) return [];
    const ans = [];
    const dfs = (node, path) => {
        const next = path ? path + "->" + node.val : String(node.val);
        if (!node.left && !node.right) {
            ans.push(next);
            return;
        }
        if (node.left) dfs(node.left, next);
        if (node.right) dfs(node.right, next);
    };
    dfs(root, "");
    return ans;
};
