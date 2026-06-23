var countNumbers = function(n) {
    const limit = Math.pow(10, n);
    const ans = [];
    for (let i = 1; i < limit; i++) ans.push(i);
    return ans;
};
