#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int compress(vector<char>& chars) {
        int write = 0;
        int i = 0;

        while (i < chars.size()) {
            char c = chars[i];
            int j = i;
            while (j < chars.size() && chars[j] == c) j++;

            chars[write++] = c;
            int count = j - i;
            if (count > 1) {
                string num = to_string(count);
                for (char digit : num) chars[write++] = digit;
            }
            i = j;
        }
        return write;
    }
};
