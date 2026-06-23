#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> ans(n, vector<int>(n));
        int top = 0, bottom = n - 1, left = 0, right = n - 1;
        int value = 1;

        while (top <= bottom && left <= right) {
            for (int j = left; j <= right; j++) ans[top][j] = value++;
            top++;
            for (int i = top; i <= bottom; i++) ans[i][right] = value++;
            right--;
            for (int j = right; j >= left; j--) ans[bottom][j] = value++;
            bottom--;
            for (int i = bottom; i >= top; i--) ans[i][left] = value++;
            left++;
        }
        return ans;
    }
};
