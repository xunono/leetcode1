#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
    string longestDupSubstring(string s) {
        int left = 1, right = s.size() - 1;
        int start = -1, len = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int pos = findDuplicate(s, mid);
            if (pos != -1) {
                start = pos;
                len = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return start == -1 ? "" : s.substr(start, len);
    }

private:
    int findDuplicate(string& s, int len) {
        const long long mod = 1000000007;
        const long long base = 131;
        long long hash = 0;
        long long power = 1;

        for (int i = 0; i < len; i++) {
            hash = (hash * base + s[i]) % mod;
            power = power * base % mod;
        }

        unordered_map<long long, vector<int>> seen;
        seen[hash].push_back(0);

        for (int i = len; i < s.size(); i++) {
            hash = (hash * base - s[i - len] * power % mod + mod + s[i]) % mod;
            int start = i - len + 1;
            if (seen.count(hash)) {
                for (int prev : seen[hash]) {
                    if (s.compare(prev, len, s, start, len) == 0) return start;
                }
            }
            seen[hash].push_back(start);
        }
        return -1;
    }
};
