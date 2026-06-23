#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        reverse(s.begin(), s.end());
        int n = s.size();
        int idx = 0;

        for (int start = 0; start < n; start++) {
            if (s[start] == ' ') continue;
            if (idx != 0) s[idx++] = ' ';
            int end = start;
            while (end < n && s[end] != ' ') s[idx++] = s[end++];
            reverse(s.begin() + idx - (end - start), s.begin() + idx);
            start = end;
        }

        s.resize(idx);
        return s;
    }
};
