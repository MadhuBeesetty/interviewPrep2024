const fun = (random) => {
  // console.log(a);
  console.log(b);
  b = "whatever"
  // console.log(c);
  for(var i = 0; i < random.length; i++){
    console.log(b);
    let a = 0;
    var b = 0;
    console.log(b);
    const c = 1;
  }
};

fun([1]);


// var is defined inside the for loop but when the function run it goes to the up and declars itself as undefined,
// so technically you can assign the values to var even outside the scope


// let and const are introduced in ES6 and they have strict scope.
//  where as let is only intiated inside the for loop and line 2 wil throw an error.
// const also has the same reference error and it cannot be accessed outside the for loop.
