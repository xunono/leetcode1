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
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode dummy(0, head);
        ListNode* pre = &dummy;

        while (true) {
            ListNode* tail = pre;
            for (int i = 0; i < k && tail; i++) tail = tail->next;
            if (!tail) break;

            ListNode* next = tail->next;
            ListNode* prev = next;
            ListNode* cur = pre->next;
            while (cur != next) {
                ListNode* temp = cur->next;
                cur->next = prev;
                prev = cur;
                cur = temp;
            }

            ListNode* start = pre->next;
            pre->next = tail;
            pre = start;
        }

        return dummy.next;
    }
};
