/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

class Solution {
public:
    // 哈希表：key=原节点val，value=对应的克隆节点
    unordered_map<int, Node*> visited;

    Node* cloneGraph(Node* node) {
        // 边界：空图
        if (node == nullptr) return nullptr;

        // 如果该节点已经克隆过，直接返回缓存的克隆节点
        if (visited.find(node->val) != visited.end()) {
            return visited[node->val];
        }

        // 1. 创建当前节点的克隆
        Node* cloneNode = new Node(node->val);
        // 存入哈希表，标记已访问
        visited[node->val] = cloneNode;

        // 2. 递归克隆所有邻居，填充克隆节点的邻接列表
        for (Node* neighbor : node->neighbors) {
            cloneNode->neighbors.push_back(cloneGraph(neighbor));
        }

        return cloneNode;
    }
};
