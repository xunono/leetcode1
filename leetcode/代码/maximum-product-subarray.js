var maxProduct = function(nums) {
    let maxHere = nums[0];
    let minHere = nums[0];
    let ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];
        if (x < 0) {
            const tmp = maxHere;
            maxHere = minHere;
            minHere = tmp;
        }
        maxHere = Math.max(x, maxHere * x);
        minHere = Math.min(x, minHere * x);
        ans = Math.max(ans, maxHere);
    }
    return ans;
};
