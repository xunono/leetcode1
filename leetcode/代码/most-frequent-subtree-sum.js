#include <vector>
#include <unordered_map>
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> findFrequentTreeSum(TreeNode* root) {
        unordered_map<int, int> count;
        int maxCount = 0;
        dfs(root, count, maxCount);

        vector<int> ans;
        for (auto& item : count) {
            if (item.second == maxCount) ans.push_back(item.first);
        }
        return ans;
    }

private:
    int dfs(TreeNode* root, unordered_map<int, int>& count, int& maxCount) {
        if (!root) return 0;
        int sum = root->val + dfs(root->left, count, maxCount) + dfs(root->right, count, maxCount);
        maxCount = max(maxCount, ++count[sum]);
        return sum;
    }
};
