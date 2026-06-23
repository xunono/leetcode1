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
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        return build(nums, 0, nums.size() - 1);
    }

private:
    TreeNode* build(vector<int>& nums, int left, int right) {
        if (left > right) return nullptr;
        int idx = left;
        for (int i = left + 1; i <= right; i++) {
            if (nums[i] > nums[idx]) idx = i;
        }
        TreeNode* root = new TreeNode(nums[idx]);
        root->left = build(nums, left, idx - 1);
        root->right = build(nums, idx + 1, right);
        return root;
    }
};
