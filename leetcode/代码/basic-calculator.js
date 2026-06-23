#include <string>
#include <stack>
#include <cctype>
using namespace std;

class Solution {
public:
    int calculate(string s) {
        stack<int> signs;
        signs.push(1);
        int sign = 1;
        long ans = 0;

        for (int i = 0; i < s.size(); i++) {
            char c = s[i];
            if (isdigit(c)) {
                long num = 0;
                while (i < s.size() && isdigit(s[i])) {
                    num = num * 10 + s[i] - '0';
                    i++;
                }
                i--;
                ans += sign * num;
            } else if (c == '+') {
                sign = signs.top();
            } else if (c == '-') {
                sign = -signs.top();
            } else if (c == '(') {
                signs.push(sign);
            } else if (c == ')') {
                signs.pop();
            }
        }
        return ans;
    }
};
