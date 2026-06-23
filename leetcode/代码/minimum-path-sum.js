var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) dp[j] += grid[i][j];
            else dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }
    return dp[n - 1];
};
