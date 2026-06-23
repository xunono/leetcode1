var pathTarget = function(root, target) {
    const ans = [];
    const path = [];
    const dfs = (node, sum) => {
        if (!node) return;
        path.push(node.val);
        sum += node.val;
        if (!node.left && !node.right && sum === target) ans.push(path.slice());
        dfs(node.left, sum);
        dfs(node.right, sum);
        path.pop();
    };
    dfs(root, 0);
    return ans;
};
