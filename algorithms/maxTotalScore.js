// Description: In a thrilling game scenario, you are presented with an array
// containing 2N positive integers. Alongside this, you are equipped with N
// operations to strategically manipulate these numbers. In each operation,
// you have the power to choose any two positive integers from the array.
// To determine your score in each round, the algorithm calculates the greatest
//  common divisor of the selected numbers, multiplying it by the corresponding
//  operation number. The resulting value contributes to your total score. The
//  ultimate objective is to optimize your actions and achieve the highest possible
// total score. Can you devise a winning strategy and uncover the maximum total score?

// Input:

// The first line of input contains an integer N, representing the number of operations.
// The second line of input contains 2N space-separated integers, representing the array.
// Output:

// Print the maximum total score.
// Constraints:

// 1 ≤ 𝑁 ≤ 10
// 1≤N≤10
// 1 ≤ arr [𝑖]≤ 1
// 0
// 9
// 1≤arr[i]≤10
// 9

// Example Input and Output:
// Example #1:
// Input:
// 2
// 3 4 9 5
// Output:
// 7
// Explanation: Max score is 1
// ×
// gcd(4,5) +2
// ×
// gcd(3,9)
// 1×gcd(4,5)+2×gcd(3,9).
