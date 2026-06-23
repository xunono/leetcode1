var decorateRecord = function(root) {
    if (!root) return [];
    const ans = [];
    const queue = [root];
    let head = 0;
    while (head < queue.length) {
        const size = queue.length - head;
        const level = [];
        for (let i = 0; i < size; i++) {
            const node = queue[head++];
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ans.push(level);
    }
    return ans;
};
