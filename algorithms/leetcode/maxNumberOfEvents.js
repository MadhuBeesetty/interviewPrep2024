// 1353. Maximum Number of Events That Can Be Attended

// You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts
// at startDayi and ends at endDayi.

// You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend
// one event at any time d.

// Return the maximum number of events you can attend.

// Example 1:

// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3
// Explanation: You can attend all the three events.
// One way to attend them all is as shown.
// Attend the first event on day 1.
// Attend the second event on day 2.
// Attend the third event on day 3.
// Example 2:

// Input: events= [[1,2],[2,3],[3,4],[1,2]]
// Output: 4

const maxEvents = (events) => {
  events.sort((a, b) => a[1] - b[1]);
  console.log(events, "this is events");
  const attendedDays = new Set();
  let count = 0;

  for (var i = 0; i < events.length; i++) {
      let startDay = events[i][0];
      let endDay = events[i][1];
      console.log(startDay, attendedDays.has(startDay), "line 34");
      if (attendedDays.has(startDay) === true) {
        console.log(startDay, "line 36");
          if (attendedDays.has(endDay) !== true) {
              attendedDays.add(endDay);
              count++;
          }
      } else {
        console.log(startDay, "line 43");
          attendedDays.add(startDay);
          count++;
      }
      console.log(attendedDays);
  }

  return count;
}

console.log(maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]]))
