// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (nums) => {
    let obj = {};
    for(var i =0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] = obj[nums[i]] + 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    let mostRepeatValue = Math.max(...Object.values(obj))

    let mostRepeatKey;
    console.log(Object.keys(obj), "keys");
    Object.keys(obj).forEach((element) => {
        if(obj[element] === mostRepeatValue){
            console.log(element, obj[element]);
            mostRepeatKey = element;
            return;
        }
    })
    console.log(mostRepeatKey, "keys");
    return mostRepeatKey;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));