// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5
 

// Constraints:

// -1000 <= a, b <= 1000

 const getSum = (a, b) => {
    if (b < 0) {
        for(var i = 0; i > b; i--){
             a--;
        }
        return a;
    }
      for (var i = 0; i < b; i++) {
        a++;
      }
   return a;
 };

 console.log(getSum(1,2));