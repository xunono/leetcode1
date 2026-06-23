#include <vector>
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
private:
    TreeNode* prev = nullptr;
    int count = 0;
    int maxCount = 0;
    vector<int> ans;

public:
    vector<int> findMode(TreeNode* root) {
        inorder(root);
        return ans;
    }

private:
    void inorder(TreeNode* root) {
        if (!root) return;
        inorder(root->left);

        count = (prev && prev->val == root->val) ? count + 1 : 1;
        if (count > maxCount) {
            maxCount = count;
            ans.clear();
            ans.push_back(root->val);
        } else if (count == maxCount) {
            ans.push_back(root->val);
        }
        prev = root;

        inorder(root->right);
    }
};
