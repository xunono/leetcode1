#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj(numCourses);
        vector<int> inDegree(numCourses, 0);
        // 建图
        for (auto& edge : prerequisites) {
            int a = edge[0], b = edge[1];
            adj[b].push_back(a);
            inDegree[a]++;
        }

        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) q.push(i);
        }

        vector<int> res;
        while (!q.empty()) {
            int cur = q.front();
            q.pop();
            res.push_back(cur);
            for (int next : adj[cur]) {
                inDegree[next]--;
                if (inDegree[next] == 0) q.push(next);
            }
        }
        // 存在环，返回空数组
        if (res.size() != numCourses) return {};
        return res;
    }
};