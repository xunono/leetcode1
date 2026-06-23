var numDecodings = function(s) {
    if (!s || s[0] === "0") return 0;
    let a = 1;
    let b = 1;
    for (let i = 1; i < s.length; i++) {
        let c = s[i] !== "0" ? b : 0;
        const two = Number(s.slice(i - 1, i + 1));
        if (two >= 10 && two <= 26) c += a;
        a = b;
        b = c;
    }
    return b;
};
