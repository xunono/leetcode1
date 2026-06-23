var maxProfit = function(prices) {
    let minPrice = Infinity;
    let ans = 0;
    for (const p of prices) {
        minPrice = Math.min(minPrice, p);
        ans = Math.max(ans, p - minPrice);
    }
    return ans;
};
