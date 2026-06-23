#include <string>
using namespace std;

class Solution {
public:
    string pathEncryption(string s) {
        string ans;
        for (char c : s) {
            if (c == '.') ans.push_back(' ');
            else ans.push_back(c);
        }
        return ans;
    }
};
