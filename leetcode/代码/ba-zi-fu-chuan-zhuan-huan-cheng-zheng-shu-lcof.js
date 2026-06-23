#include <string>
#include <climits>
#include <cctype>
using namespace std;

class Solution {
public:
    int myAtoi(string str) {
        int i = 0;
        while (i < str.size() && str[i] == ' ') i++;

        int sign = 1;
        if (i < str.size() && (str[i] == '+' || str[i] == '-')) {
            sign = str[i] == '-' ? -1 : 1;
            i++;
        }

        long long ans = 0;
        while (i < str.size() && isdigit(str[i])) {
            ans = ans * 10 + str[i] - '0';
            if (sign == 1 && ans > INT_MAX) return INT_MAX;
            if (sign == -1 && -ans < INT_MIN) return INT_MIN;
            i++;
        }

        return sign * ans;
    }
};
