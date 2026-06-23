var findBottomLeftValue = function(root) {
    let ans = root.val;
    const queue = [root];
    let head = 0;
    while (head < queue.length) {
        const size = queue.length - head;
        ans = queue[head].val;
        for (let i = 0; i < size; i++) {
            const node = queue[head++];
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return ans;
};
