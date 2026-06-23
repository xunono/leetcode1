#include <stack>
using namespace std;

class CQueue {
private:
    stack<int> inStack;
    stack<int> outStack;

    void move() {
        if (!outStack.empty()) return;
        while (!inStack.empty()) {
            outStack.push(inStack.top());
            inStack.pop();
        }
    }

public:
    CQueue() {}

    void appendTail(int value) {
        inStack.push(value);
    }

    int deleteHead() {
        move();
        if (outStack.empty()) return -1;
        int value = outStack.top();
        outStack.pop();
        return value;
    }
};
