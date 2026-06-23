#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                char left = st.top();
                st.pop();
                if ((c == ')' && left != '(') ||
                    (c == ']' && left != '[') ||
                    (c == '}' && left != '{')) {
                    return false;
                }
            }
        }
        return st.empty();
    }
};
