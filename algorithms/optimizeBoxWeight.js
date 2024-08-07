const minimalHeaviestSetA = (arr) => {

  arr.sort((a, b) => b - a);

  let subA = [];
  let subASum = 0;
  let subBSum = arr.reduce((acc, val) => acc + val, 0);

  for (let i = 0; i < arr.length; i++) {
      subA.push(arr[i]);
      subASum += arr[i];
      subBSum -= arr[i];

      if (subASum > subBSum) {
          break;
      }
  }

  return subA.sort((a,b) => a - b);
}
