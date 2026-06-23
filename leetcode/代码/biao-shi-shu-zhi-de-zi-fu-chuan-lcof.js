#include <string>
#include <unordered_map>
#include <vector>
#include <cctype>
using namespace std;

class Solution {
public:
    bool validNumber(string s) {
        vector<unordered_map<char, int>> states = {
            {{' ', 0}, {'s', 1}, {'d', 2}, {'.', 4}},
            {{'d', 2}, {'.', 4}},
            {{'d', 2}, {'.', 3}, {'e', 5}, {' ', 8}},
            {{'d', 3}, {'e', 5}, {' ', 8}},
            {{'d', 3}},
            {{'s', 6}, {'d', 7}},
            {{'d', 7}},
            {{'d', 7}, {' ', 8}},
            {{' ', 8}}
        };

        int p = 0;
        for (char c : s) {
            char t;
            if (isdigit(c)) t = 'd';
            else if (c == '+' || c == '-') t = 's';
            else if (c == 'e' || c == 'E') t = 'e';
            else if (c == '.' || c == ' ') t = c;
            else t = '?';

            if (!states[p].count(t)) return false;
            p = states[p][t];
        }
        return p == 2 || p == 3 || p == 7 || p == 8;
    }
};
