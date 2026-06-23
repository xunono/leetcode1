var lengthOfLIS = function(nums) {
    const tails = [];
    for (const x of nums) {
        let l = 0;
        let r = tails.length;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (tails[m] < x) l = m + 1;
            else r = m;
        }
        tails[l] = x;
    }
    return tails.length;
};
