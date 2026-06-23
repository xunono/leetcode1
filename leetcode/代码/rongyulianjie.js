#include <vector>
using namespace std;

class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        int n = edges.size();
        vector<int> parent(n + 1);
        for (int i = 1; i <= n; i++) parent[i] = i;

        for (auto& edge : edges) {
            int a = edge[0];
            int b = edge[1];
            if (find(parent, a) == find(parent, b)) return edge;
            unite(parent, a, b);
        }

        return {};
    }

private:
    int find(vector<int>& parent, int x) {
        if (parent[x] != x) parent[x] = find(parent, parent[x]);
        return parent[x];
    }

    void unite(vector<int>& parent, int a, int b) {
        int rootA = find(parent, a);
        int rootB = find(parent, b);
        if (rootA != rootB) parent[rootA] = rootB;
    }
};
