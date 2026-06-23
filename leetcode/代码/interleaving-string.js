var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;
    if (m + n !== s3.length) return false;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i > 0) dp[j] = dp[j] && s1[i - 1] === s3[i + j - 1];
            if (j > 0) dp[j] = dp[j] || (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }
    return dp[n];
};
