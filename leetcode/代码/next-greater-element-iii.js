#include <algorithm>
#include <climits>
#include <string>
using namespace std;

class Solution {
public:
    int nextGreaterElement(int n) {
        string s = to_string(n);
        if (!next_permutation(s.begin(), s.end())) return -1;
        long long value = stoll(s);
        return value > INT_MAX ? -1 : value;
    }
};
