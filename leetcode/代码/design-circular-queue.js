#include <vector>
using namespace std;

class MyCircularQueue {
private:
    vector<int> data;
    int head = 0;
    int count = 0;
    int capacity = 0;

public:
    MyCircularQueue(int k) {
        data.assign(k, 0);
        capacity = k;
    }

    bool enQueue(int value) {
        if (isFull()) return false;
        data[(head + count) % capacity] = value;
        count++;
        return true;
    }

    bool deQueue() {
        if (isEmpty()) return false;
        head = (head + 1) % capacity;
        count--;
        return true;
    }

    int Front() {
        return isEmpty() ? -1 : data[head];
    }

    int Rear() {
        return isEmpty() ? -1 : data[(head + count - 1) % capacity];
    }

    bool isEmpty() {
        return count == 0;
    }

    bool isFull() {
        return count == capacity;
    }
};
