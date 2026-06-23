#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
        int n = graph.size();
        vector<int> color(n, 0);

        for (int i = 0; i < n; i++) {
            if (color[i] != 0) continue;

            queue<int> q;
            q.push(i);
            color[i] = 1;

            while (!q.empty()) {
                int cur = q.front();
                q.pop();

                for (int next : graph[cur]) {
                    if (color[next] == 0) {
                        color[next] = -color[cur];
                        q.push(next);
                    } else if (color[next] == color[cur]) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
};
