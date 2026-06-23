var sortedListToBST = function(head) {
    const nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    const build = (l, r) => {
        if (l > r) return null;
        const m = Math.floor((l + r) / 2);
        const node = new TreeNode(nums[m]);
        node.left = build(l, m - 1);
        node.right = build(m + 1, r);
        return node;
    };
    return build(0, nums.length - 1);
};
