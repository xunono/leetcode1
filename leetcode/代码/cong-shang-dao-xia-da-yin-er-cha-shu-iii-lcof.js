var decorateRecord = function(root) {
    if (!root) return [];
    const ans = [];
    const queue = [root];
    let head = 0;
    let leftToRight = true;
    while (head < queue.length) {
        const size = queue.length - head;
        const level = new Array(size);
        for (let i = 0; i < size; i++) {
            const node = queue[head++];
            level[leftToRight ? i : size - 1 - i] = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ans.push(level);
        leftToRight = !leftToRight;
    }
    return ans;
};
