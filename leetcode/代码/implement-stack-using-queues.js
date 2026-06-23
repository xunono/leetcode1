#include <queue>
using namespace std;

class MyStack {
private:
    queue<int> q;

public:
    MyStack() {}

    void push(int x) {
        q.push(x);
        int size = q.size();
        while (--size) {
            q.push(q.front());
            q.pop();
        }
    }

    int pop() {
        int x = q.front();
        q.pop();
        return x;
    }

    int top() {
        return q.front();
    }

    bool empty() {
        return q.empty();
    }
};
