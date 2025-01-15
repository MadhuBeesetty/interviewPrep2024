// 264. Ugly Number II

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly
//  numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

  const nthUglyNumber = (n) => {
    const divisors = new Set([2, 3, 5]);
    let tracker = 1;
    let trackingUglyNums = [1];
    let num = 1;

    while (tracker < n) {
        num++;
        let temp = num;
        let isUgly = true;

        for (let i = 2; i <= temp; i++) {
            if (temp % i === 0) {
                if (!divisors.has(i)) {
                    isUgly = false;
                    break;
                }
                while (temp % i === 0) {
                    temp /= i;
                }
            }
        }

        if (isUgly) {
            trackingUglyNums.push(num);
            tracker++;
        }
    }
    return trackingUglyNums[trackingUglyNums.length - 1];
};
