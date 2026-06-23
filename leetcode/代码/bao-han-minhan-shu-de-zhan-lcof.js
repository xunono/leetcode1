#include <stack>
using namespace std;

class MinStack {
private:
    stack<int> data;
    stack<int> mins;

public:
    MinStack() {}

    void push(int x) {
        data.push(x);
        if (mins.empty() || x <= mins.top()) mins.push(x);
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
