#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    string simplifyPath(string path) {
        vector<string> st;
        int i = 0;

        while (i < path.size()) {
            while (i < path.size() && path[i] == '/') i++;
            string part;
            while (i < path.size() && path[i] != '/') part.push_back(path[i++]);

            if (part.empty() || part == ".") continue;
            if (part == "..") {
                if (!st.empty()) st.pop_back();
            } else {
                st.push_back(part);
            }
        }

        string ans;
        for (string& part : st) ans += "/" + part;
        return ans.empty() ? "/" : ans;
    }
};
