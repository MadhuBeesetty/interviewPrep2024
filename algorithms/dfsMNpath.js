// given m,n values you need to reach m-1,n-1 you can move
// right that is m+1 and down that is n-1, where starting point is (0,0),
// how many unique paths are possible?

const dfsPaths = (m,n) => {
  let paths = 0;

  const dfs = (i,j) => {
    if(i >= m || j >= n){
      return;
    };
    if(i === m-1 && j === n-1){
      paths++;
      return;
    };
    dfs(i+1, j);
    dfs(i, j+1);
  }
  dfs(0,0);
  return paths;
};
console.log(dfsPaths(3,7));
console.log(dfsPaths(4,4));
