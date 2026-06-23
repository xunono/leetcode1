var maxProfit = function(prices) {
    let buy1 = -Infinity;
    let buy2 = -Infinity;
    let sell1 = 0;
    let sell2 = 0;
    for (const p of prices) {
        buy1 = Math.max(buy1, -p);
        sell1 = Math.max(sell1, buy1 + p);
        buy2 = Math.max(buy2, sell1 - p);
        sell2 = Math.max(sell2, buy2 + p);
    }
    return sell2;
};
