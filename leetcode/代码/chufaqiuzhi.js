#include <string>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
public:
    vector<double> calcEquation(vector<vector<string>>& equations,
                                vector<double>& values,
                                vector<vector<string>>& queries) {
        unordered_map<string, vector<pair<string, double>>> graph;

        for (int i = 0; i < equations.size(); i++) {
            const string& a = equations[i][0];
            const string& b = equations[i][1];
            double value = values[i];
            graph[a].push_back({b, value});
            graph[b].push_back({a, 1.0 / value});
        }

        vector<double> ans;
        for (auto& query : queries) {
            const string& start = query[0];
            const string& target = query[1];
            if (!graph.count(start) || !graph.count(target)) {
                ans.push_back(-1.0);
                continue;
            }
            unordered_set<string> visited;
            ans.push_back(dfs(start, target, 1.0, graph, visited));
        }
        return ans;
    }

private:
    double dfs(const string& cur,
               const string& target,
               double product,
               unordered_map<string, vector<pair<string, double>>>& graph,
               unordered_set<string>& visited) {
        if (cur == target) return product;

        visited.insert(cur);
        for (auto& next : graph[cur]) {
            if (visited.count(next.first)) continue;
            double res = dfs(next.first, target, product * next.second, graph, visited);
            if (res != -1.0) return res;
        }
        return -1.0;
    }
};
