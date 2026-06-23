var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const dup = new Set();
    for (let i = 0; i + 10 <= s.length; i++) {
        const sub = s.slice(i, i + 10);
        if (seen.has(sub)) dup.add(sub);
        seen.add(sub);
    }
    return Array.from(dup);
};
