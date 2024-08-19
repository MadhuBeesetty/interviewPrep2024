// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

// Example 1:

// Input: n = 00011
// Output:    24 (11000)

const reverseBit = (num) => {
    console.log(num);
    let output = 0;
    const reverseNum = num.toString().split('').reverse().join('');
    console.log(num, reverseNum);
    let tracker = reverseNum.length - 1;
    for(var i = 0; i < reverseNum.length; i++){
        output = output + (reverseNum[tracker] * Math.pow(2,1));
        tracker = tracker - 1;
    }
    return output;
}

console.log(reverseBit(011));