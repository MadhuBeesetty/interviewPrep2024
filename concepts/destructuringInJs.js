let obj = {
  "a" : 1,
  "b" : 2
};

let {a} = obj;

console.log(a);

obj = {...obj, a : 20};

// obj2["a"] = 20;

console.log(obj);
