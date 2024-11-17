const print1 = () => {
  console.log("1");
};

const print2 = () => {
  const number2 = () => "2";
  console.log(number2());
};

const print3 = () => {
  const fs = require("fs");
  fs.readFile('./three.txt', 'utf-8', (err, three) => console.log(three));
};

const print4 = () => {
  console.log("4");
};

print1();
print2();
print3();
print4();
