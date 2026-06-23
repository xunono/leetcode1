#include <string>
#include <sstream>
#include <queue>
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:
    string serialize(TreeNode* root) {
        if (!root) return "";
        string ans;
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            TreeNode* cur = q.front();
            q.pop();
            if (!cur) {
                ans += "#,";
            } else {
                ans += to_string(cur->val) + ",";
                q.push(cur->left);
                q.push(cur->right);
            }
        }
        return ans;
    }

    TreeNode* deserialize(string data) {
        if (data.empty()) return nullptr;
        stringstream ss(data);
        string item;
        getline(ss, item, ',');
        TreeNode* root = new TreeNode(stoi(item));
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            TreeNode* cur = q.front();
            q.pop();
            if (getline(ss, item, ',') && item != "#") {
                cur->left = new TreeNode(stoi(item));
                q.push(cur->left);
            }
            if (getline(ss, item, ',') && item != "#") {
                cur->right = new TreeNode(stoi(item));
                q.push(cur->right);
            }
        }
        return root;
    }
};
