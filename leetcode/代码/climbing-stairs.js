var climbStairs = function(n) {
    let a = 1;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
};
