#include <stack>
using namespace std;

class MinStack {
private:
    stack<int> data;
    stack<int> mins;

public:
    MinStack() {}

    void push(int val) {
        data.push(val);
        if (mins.empty() || val <= mins.top()) mins.push(val);
    }

    void pop() {
        if (data.top() == mins.top()) mins.pop();
        data.pop();
    }

    int top() {
        return data.top();
    }

    int getMin() {
        return mins.top();
    }
};
