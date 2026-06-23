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
public:
    TreeNode* flipTree(TreeNode* root) {
        if (!root) return nullptr;
        TreeNode* left = flipTree(root->left);
        TreeNode* right = flipTree(root->right);
        root->left = right;
        root->right = left;
        return root;
    }
};
