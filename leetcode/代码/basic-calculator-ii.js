#include <string>
#include <stack>
#include <cctype>
using namespace std;

class Solution {
public:
    int calculate(string s) {
        stack<int> st;
        char op = '+';
        long num = 0;

        for (int i = 0; i <= s.size(); i++) {
            char c = i == s.size() ? '+' : s[i];
            if (isdigit(c)) {
                num = num * 10 + c - '0';
            }
            if ((!isdigit(c) && c != ' ') || i == s.size()) {
                if (op == '+') st.push(num);
                else if (op == '-') st.push(-num);
                else if (op == '*') {
                    int top = st.top(); st.pop();
                    st.push(top * num);
                } else if (op == '/') {
                    int top = st.top(); st.pop();
                    st.push(top / num);
                }
                op = c;
                num = 0;
            }
        }

        int ans = 0;
        while (!st.empty()) {
            ans += st.top();
            st.pop();
        }
        return ans;
    }
};
