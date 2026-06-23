var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    const run = (l, r) => {
        let prev = 0;
        let cur = 0;
        for (let i = l; i <= r; i++) {
            const next = Math.max(cur, prev + nums[i]);
            prev = cur;
            cur = next;
        }
        return cur;
    };
    return Math.max(run(0, nums.length - 2), run(1, nums.length - 1));
};
