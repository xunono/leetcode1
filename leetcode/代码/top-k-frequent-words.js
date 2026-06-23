#include <vector>
#include <string>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<string> topKFrequent(vector<string>& words, int k) {
        unordered_map<string, int> freq;
        for (string& word : words) freq[word]++;

        vector<string> all;
        for (auto& item : freq) all.push_back(item.first);
        sort(all.begin(), all.end(), [&](const string& a, const string& b) {
            if (freq[a] != freq[b]) return freq[a] > freq[b];
            return a < b;
        });

        return vector<string>(all.begin(), all.begin() + k);
    }
};
