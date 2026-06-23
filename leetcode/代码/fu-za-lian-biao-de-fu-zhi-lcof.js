#include <unordered_map>
using namespace std;

/*
class Node {
public:
    int val;
    Node* next;
    Node* random;
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (!head) return nullptr;
        unordered_map<Node*, Node*> map;

        for (Node* cur = head; cur; cur = cur->next) {
            map[cur] = new Node(cur->val);
        }
        for (Node* cur = head; cur; cur = cur->next) {
            map[cur]->next = map[cur->next];
            map[cur]->random = map[cur->random];
        }
        return map[head];
    }
};
