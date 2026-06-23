#include <string>
using namespace std;

class Solution {
public:
    int countSubstrings(string s) {
        int ans = 0;
        for (int center = 0; center < s.size(); center++) {
            ans += expand(s, center, center);
            ans += expand(s, center, center + 1);
        }
        return ans;
    }

private:
    int expand(string& s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
};
