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
private:
    unordered_map<int, int> postIndex;

public:
    TreeNode* constructFromPrePost(vector<int>& preorder, vector<int>& postorder) {
        for (int i = 0; i < postorder.size(); i++) postIndex[postorder[i]] = i;
        return build(preorder, 0, preorder.size() - 1, postorder, 0, postorder.size() - 1);
    }

private:
    TreeNode* build(vector<int>& pre, int pl, int pr, vector<int>& post, int ql, int qr) {
        if (pl > pr) return nullptr;
        TreeNode* root = new TreeNode(pre[pl]);
        if (pl == pr) return root;
        int leftRoot = pre[pl + 1];
        int idx = postIndex[leftRoot];
        int leftSize = idx - ql + 1;
        root->left = build(pre, pl + 1, pl + leftSize, post, ql, idx);
        root->right = build(pre, pl + leftSize + 1, pr, post, idx + 1, qr - 1);
        return root;
    }
};
