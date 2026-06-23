#include <string>
#include <queue>
#include <vector>
using namespace std;

class Solution {
public:
    string reorganizeString(string s) {
        vector<int> cnt(26, 0);
        for (char c : s) cnt[c - 'a']++;

        priority_queue<pair<int, char>> pq;
        for (int i = 0; i < 26; i++) {
            if (cnt[i] > 0) pq.push({cnt[i], char('a' + i)});
        }

        string ans;
        while (pq.size() >= 2) {
            auto first = pq.top(); pq.pop();
            auto second = pq.top(); pq.pop();
            ans.push_back(first.second);
            ans.push_back(second.second);
            if (--first.first > 0) pq.push(first);
            if (--second.first > 0) pq.push(second);
        }

        if (!pq.empty()) {
            if (pq.top().first > 1) return "";
            ans.push_back(pq.top().second);
        }
        return ans;
    }
};
