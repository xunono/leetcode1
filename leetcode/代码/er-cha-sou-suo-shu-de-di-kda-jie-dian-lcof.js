/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
private:
    int count = 0;
    int ans = 0;

public:
    int findTargetNode(TreeNode* root, int cnt) {
        count = cnt;
        dfs(root);
        return ans;
    }

private:
    void dfs(TreeNode* root) {
        if (!root || count == 0) return;
        dfs(root->right);
        if (--count == 0) {
            ans = root->val;
            return;
        }
        dfs(root->left);
    }
};
