#include <unordered_map>
#include <stack>
using namespace std;

class FreqStack {
private:
    unordered_map<int, int> freq;
    unordered_map<int, stack<int>> groups;
    int maxFreq = 0;

public:
    FreqStack() {}

    void push(int val) {
        int f = ++freq[val];
        if (f > maxFreq) maxFreq = f;
        groups[f].push(val);
    }

    int pop() {
        int val = groups[maxFreq].top();
        groups[maxFreq].pop();
        freq[val]--;
        if (groups[maxFreq].empty()) maxFreq--;
        return val;
    }
};
