// Problem: Effective Manager

// A product manager must organize n meetings with different people. Each meeting either increases
//  or decreases the effectiveness index of the manager. The goal is to organize the meetings in such a
// way that the effectiveness index stays positive for as many meetings as possible. Initially, the effectiveness index is 0.

// Input:

// n (integer): Number of meetings.
// effectiveness (array): An array of integers where each element represents the effectiveness change
// for a meeting.
// Output:

// Maximum number of meetings for which the effectiveness index remains positive.
// Constraints:

// After every meeting, the effectiveness index must be greater than 0 for it to count.

// n = 4
// effectiveness = [1, -20, 3, -2]

// One optimal meeting order is [3, -2, 1, -20]. The index is positive for the first three meetings:
// - Start with 0
// - After 3: 0 + 3 = 3
// - After -2: 3 - 2 = 1
// - After 1: 1 + 1 = 2

// After that, adding -20 would drop the index to a negative value.
// So, the answer is **3** because it is not possible to keep the index positive for all 4 meetings.

const maxMeetings = (effectiveness) => {
  effectiveness.sort((a, b) => b - a);
  let sum = 0, count = 0;

  for (let i = 0; i < effectiveness.length; i++) {
      sum = effectiveness[i] + sum;
      if (sum > 0) {
          count++;
      } else {
          break;
      }
  }

  return count;
}
