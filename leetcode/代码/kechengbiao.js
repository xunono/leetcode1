#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // 1. 构建邻接表 & 入度数组
        vector<vector<int>> adj(numCourses);
        vector<int> inDegree(numCourses, 0);
        for (auto& edge : prerequisites) {
            int a = edge[0], b = edge[1];
            adj[b].push_back(a); // b -> a
            inDegree[a]++;
        }

        // 2. 入度为0的节点入队
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) q.push(i);
        }

        int cnt = 0; // 统计能完成的课程
        while (!q.empty()) {
            int cur = q.front();
            q.pop();
            cnt++;
            // 遍历当前课程所有后继
            for (int next : adj[cur]) {
                inDegree[next]--;
                if (inDegree[next] == 0) q.push(next);
            }
        }
        return cnt == numCourses;
    }
};
