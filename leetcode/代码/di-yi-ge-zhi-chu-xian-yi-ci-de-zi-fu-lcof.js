#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    char dismantlingAction(string s) {
        vector<int> cnt(256, 0);
        for (char c : s) cnt[(unsigned char)c]++;
        for (char c : s) {
            if (cnt[(unsigned char)c] == 1) return c;
        }
        return ' ';
    }
};
