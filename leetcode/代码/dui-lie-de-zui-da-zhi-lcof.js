#include <queue>
#include <deque>
using namespace std;

class Checkout {
private:
    queue<int> data;
    deque<int> maxValues;

public:
    Checkout() {}

    int get_max() {
        return maxValues.empty() ? -1 : maxValues.front();
    }

    void add(int value) {
        data.push(value);
        while (!maxValues.empty() && maxValues.back() < value) maxValues.pop_back();
        maxValues.push_back(value);
    }

    int remove() {
        if (data.empty()) return -1;
        int value = data.front();
        data.pop();
        if (value == maxValues.front()) maxValues.pop_front();
        return value;
    }
};
