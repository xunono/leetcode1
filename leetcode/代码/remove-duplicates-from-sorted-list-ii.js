/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode dummy(0, head);
        ListNode* pre = &dummy;

        while (head) {
            if (head->next && head->val == head->next->val) {
                int value = head->val;
                while (head && head->val == value) head = head->next;
                pre->next = head;
            } else {
                pre = head;
                head = head->next;
            }
        }

        return dummy.next;
    }
};
