#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> maxAltitude(vector<int>& nums, int k) {
        if (nums.empty() || k == 0) return {};
        deque<int> dq;
        vector<int> ans;

        for (int i = 0; i < nums.size(); i++) {
            while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
            while (!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();
            dq.push_back(i);
            if (i >= k - 1) ans.push_back(nums[dq.front()]);
        }
        return ans;
    }
};
