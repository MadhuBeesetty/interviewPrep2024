// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.
// Example 2:

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

const chunk = (arr, size) => {
    let outputArr = [];
    let chunkArr = [];
    for (var i = 0; i <= arr.length; i++) {
        if (i === arr.length) {
            if (chunkArr.length > 0) {
                outputArr.push(chunkArr);
                return outputArr;
            }
        }
        if (chunkArr.length < size) {
            chunkArr.push(arr[i]);
        } else {
            outputArr.push(chunkArr);
            chunkArr = [];
            chunkArr.push(arr[i]);
        }
    };
};

// solution 2:

const chunk1 = (arr, size) => {
    let a=[]
    let i=0
    while(i<arr.length){
        a.push(arr.slice(i,i+size))
        i+=size
    }
    return a
};

console.log(chunk([1,9,6,3,2],3))
console.log(chunk1([1,9,6,3,2],3))