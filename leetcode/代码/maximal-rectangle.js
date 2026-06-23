#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty() || matrix[0].empty()) return 0;
        int m = matrix.size(), n = matrix[0].size();
        vector<int> heights(n, 0);
        int ans = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                heights[j] = matrix[i][j] == '1' ? heights[j] + 1 : 0;
            }
            ans = max(ans, largestRectangleArea(heights));
        }
        return ans;
    }

private:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int ans = 0;
        for (int i = 0; i <= heights.size(); i++) {
            int cur = i == heights.size() ? 0 : heights[i];
            while (!st.empty() && cur < heights[st.top()]) {
                int h = heights[st.top()];
                st.pop();
                int left = st.empty() ? -1 : st.top();
                ans = max(ans, h * (i - left - 1));
            }
            st.push(i);
        }
        return ans;
    }
};
