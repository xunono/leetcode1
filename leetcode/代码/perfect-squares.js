var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i * i <= n; i++) {
        const sq = i * i;
        for (let x = sq; x <= n; x++) {
            dp[x] = Math.min(dp[x], dp[x - sq] + 1);
        }
    }
    return dp[n];
};
