var maximalSquare = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array(n + 1).fill(0);
    let ans = 0;
    for (let i = 1; i <= m; i++) {
        let prev = 0;
        for (let j = 1; j <= n; j++) {
            const temp = dp[j];
            if (matrix[i - 1][j - 1] === "1") {
                dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
                ans = Math.max(ans, dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }
    return ans * ans;
};
