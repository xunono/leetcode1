#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> count;
        count[0] = 1;
        int sum = 0;
        int ans = 0;

        for (int num : nums) {
            sum += num;
            if (count.count(sum - k)) ans += count[sum - k];
            count[sum]++;
        }

        return ans;
    }
};
