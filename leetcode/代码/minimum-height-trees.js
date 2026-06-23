var findMinHeightTrees = function(n, edges) {
    if (n <= 2) return Array.from({ length: n }, (_, i) => i);
    const graph = Array.from({ length: n }, () => []);
    const degree = new Array(n).fill(0);
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
        degree[a]++;
        degree[b]++;
    }
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) leaves.push(i);
    }
    let remain = n;
    while (remain > 2) {
        remain -= leaves.length;
        const next = [];
        for (const leaf of leaves) {
            for (const nei of graph[leaf]) {
                degree[nei]--;
                if (degree[nei] === 1) next.push(nei);
            }
        }
        leaves = next;
    }
    return leaves;
};
