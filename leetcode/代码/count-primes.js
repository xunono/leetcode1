#include <vector>
using namespace std;

class Solution {
public:
    int countPrimes(int n) {
        if (n <= 2) return 0;
        vector<bool> prime(n, true);
        prime[0] = prime[1] = false;

        for (long long i = 2; i * i < n; i++) {
            if (!prime[i]) continue;
            for (long long j = i * i; j < n; j += i) prime[j] = false;
        }

        int ans = 0;
        for (bool value : prime) if (value) ans++;
        return ans;
    }
};
