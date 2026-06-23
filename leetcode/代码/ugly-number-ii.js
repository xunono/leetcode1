#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> dp(n);
        dp[0] = 1;
        int p2 = 0, p3 = 0, p5 = 0;

        for (int i = 1; i < n; i++) {
            int next = min({dp[p2] * 2, dp[p3] * 3, dp[p5] * 5});
            dp[i] = next;
            if (next == dp[p2] * 2) p2++;
            if (next == dp[p3] * 3) p3++;
            if (next == dp[p5] * 5) p5++;
        }

        return dp[n - 1];
    }
};
