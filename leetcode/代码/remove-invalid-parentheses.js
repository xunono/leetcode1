var removeInvalidParentheses = function(s) {
    const isValid = (str) => {
        let bal = 0;
        for (const ch of str) {
            if (ch === "(") bal++;
            else if (ch === ")") {
                bal--;
                if (bal < 0) return false;
            }
        }
        return bal === 0;
    };
    const seen = new Set([s]);
    let level = [s];
    while (level.length) {
        const good = level.filter(isValid);
        if (good.length) return good;
        const next = [];
        for (const str of level) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] !== "(" && str[i] !== ")") continue;
                const t = str.slice(0, i) + str.slice(i + 1);
                if (!seen.has(t)) {
                    seen.add(t);
                    next.push(t);
                }
            }
        }
        level = next;
    }
    return [""];
};
