// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

const topKFrequent = (words, k) => {
  let obj = {};
  let outputArr = [];
  for (var i = 0; i < words.length; i++) {
      if (obj[words[i]]) {
          obj[words[i]] = obj[words[i]] + 1;
      } else {
          obj[words[i]] = 1;
      }
  };

  let sortedEntries = Object.entries(obj).sort((a, b) => {
      if (b[1] === a[1]) {
          return a[0].localeCompare(b[0]);  // Lexicographical sort
      } else {
        return b[1] - a[1];
      }
  });
  let sortedObj = Object.fromEntries(sortedEntries);
  console.log(sortedObj);
  Object.keys(sortedObj).forEach((element) => {
      if (k > 0) {
          outputArr.push(element);
      };
      k--;
  })

  return outputArr;
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2));
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));
