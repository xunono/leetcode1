#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> ans;

        for (auto& item : intervals) {
            if (ans.empty() || ans.back()[1] < item[0]) {
                ans.push_back(item);
            } else {
                ans.back()[1] = max(ans.back()[1], item[1]);
            }
        }
        return ans;
    }
};
