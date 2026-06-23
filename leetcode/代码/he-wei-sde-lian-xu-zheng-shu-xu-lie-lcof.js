var fileCombination = function(target) {
    const ans = [];
    let left = 1;
    let right = 2;
    let sum = 3;
    while (left < right) {
        if (sum === target) {
            const seq = [];
            for (let x = left; x <= right; x++) seq.push(x);
            ans.push(seq);
        }
        if (sum >= target) {
            sum -= left++;
        } else {
            sum += ++right;
        }
    }
    return ans;
};
