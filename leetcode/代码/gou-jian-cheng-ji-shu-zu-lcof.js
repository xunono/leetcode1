#include <vector>
using namespace std;

class Solution {
public:
    vector<int> statisticalResult(vector<int>& a) {
        int n = a.size();
        if (n == 0) return {};

        vector<int> ans(n, 1);
        for (int i = 1; i < n; i++) ans[i] = ans[i - 1] * a[i - 1];

        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            ans[i] *= right;
            right *= a[i];
        }
        return ans;
    }
};
