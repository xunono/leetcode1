#include <vector>
using namespace std;

class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        int n = isConnected.size();
        vector<int> parent(n);
        for (int i = 0; i < n; i++) parent[i] = i;

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isConnected[i][j] == 1) unite(parent, i, j);
            }
        }

        int count = 0;
        for (int i = 0; i < n; i++) {
            if (find(parent, i) == i) count++;
        }
        return count;
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
