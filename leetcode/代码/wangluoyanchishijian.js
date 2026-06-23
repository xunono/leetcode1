#include <vector>
#include <queue>
#include <climits>
#include <functional>
#include <algorithm>
using namespace std;

class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        vector<vector<pair<int, int>>> graph(n + 1);
        for (auto& edge : times) {
            graph[edge[0]].push_back({edge[1], edge[2]});
        }

        vector<int> dist(n + 1, INT_MAX);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        dist[k] = 0;
        pq.push({0, k});

        while (!pq.empty()) {
            auto [cost, cur] = pq.top();
            pq.pop();
            if (cost > dist[cur]) continue;

            for (auto& next : graph[cur]) {
                int node = next.first;
                int nextCost = cost + next.second;
                if (nextCost < dist[node]) {
                    dist[node] = nextCost;
                    pq.push({nextCost, node});
                }
            }
        }

        int ans = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == INT_MAX) return -1;
            ans = max(ans, dist[i]);
        }
        return ans;
    }
};
