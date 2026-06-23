#include <vector>
using namespace std;

class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        vector<int> count(k, 0);
        count[0] = 1;
        int sum = 0;
        int ans = 0;

        for (int num : nums) {
            sum = ((sum + num) % k + k) % k;
            ans += count[sum];
            count[sum]++;
        }

        return ans;
    }
};
