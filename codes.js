module.exports = {
    answers : [
        `
      #include <iostream>
#include <vector>

using namespace std;

int simpleArraySum(vector<int> ar) {
    int sum = 0;
    for (int num : ar) {
        sum += num;
    }
    return sum;
}

int main() {
    int n;
    cin >> n; // Read the size of the array

    vector<int> ar(n);
    for (int i = 0; i < n; i++) {
        cin >> ar[i]; // Read the array elements
    }

    cout << simpleArraySum(ar) << endl; // Output the sum
    return 0;
}

        
        `
    ]
}