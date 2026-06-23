#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
        int old = image[sr][sc];
        if (old == color) return image;
        dfs(image, sr, sc, old, color);
        return image;
    }

private:
    void dfs(vector<vector<int>>& image, int r, int c, int old, int color) {
        if (r < 0 || r >= image.size() || c < 0 || c >= image[0].size() || image[r][c] != old) {
            return;
        }
        image[r][c] = color;
        dfs(image, r + 1, c, old, color);
        dfs(image, r - 1, c, old, color);
        dfs(image, r, c + 1, old, color);
        dfs(image, r, c - 1, old, color);
    }
};
