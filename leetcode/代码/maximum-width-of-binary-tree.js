#include <queue>
#include <algorithm>
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
    int widthOfBinaryTree(TreeNode* root) {
        queue<pair<TreeNode*, unsigned long long>> q;
        q.push({root, 0});
        unsigned long long ans = 0;

        while (!q.empty()) {
            int size = q.size();
            unsigned long long base = q.front().second;
            unsigned long long first = 0, last = 0;
            for (int i = 0; i < size; i++) {
                auto [node, idx] = q.front();
                q.pop();
                idx -= base;
                if (i == 0) first = idx;
                if (i == size - 1) last = idx;
                if (node->left) q.push({node->left, idx * 2});
                if (node->right) q.push({node->right, idx * 2 + 1});
            }
            ans = max(ans, last - first + 1);
        }
        return ans;
    }
};
