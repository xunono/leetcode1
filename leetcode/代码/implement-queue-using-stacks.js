#include <stack>
using namespace std;

class MyQueue {
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
    MyQueue() {}

    void push(int x) {
        inStack.push(x);
    }

    int pop() {
        move();
        int x = outStack.top();
        outStack.pop();
        return x;
    }

    int peek() {
        move();
        return outStack.top();
    }

    bool empty() {
        return inStack.empty() && outStack.empty();
    }
};
