var serialize = function(root) {
    if (!root) return "[]";
    const vals = [];
    const queue = [root];
    let head = 0;
    while (head < queue.length) {
        const node = queue[head++];
        if (!node) {
            vals.push("null");
            continue;
        }
        vals.push(String(node.val));
        queue.push(node.left);
        queue.push(node.right);
    }
    while (vals[vals.length - 1] === "null") vals.pop();
    return "[" + vals.join(",") + "]";
};

var deserialize = function(data) {
    if (!data || data === "[]") return null;
    const vals = data.slice(1, -1).split(",");
    const root = new TreeNode(Number(vals[0]));
    const queue = [root];
    let head = 0;
    let idx = 1;
    while (head < queue.length && idx < vals.length) {
        const node = queue[head++];
        if (vals[idx] !== "null") {
            node.left = new TreeNode(Number(vals[idx]));
            queue.push(node.left);
        }
        idx++;
        if (idx < vals.length && vals[idx] !== "null") {
            node.right = new TreeNode(Number(vals[idx]));
            queue.push(node.right);
        }
        idx++;
    }
    return root;
};
