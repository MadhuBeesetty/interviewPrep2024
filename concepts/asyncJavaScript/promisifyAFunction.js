// write a simple fun to capitalize the first letter of a string;

const fun = (string) => {
  return string[0].toUpperCase();
};

// now lets add promise to this function for fun;

const fun1 = (string) => {
  const newProm = new Promise((resolve,reject) => {
    if(typeof(string) !== "string"){
      reject("input is not a string");
    }else{
      resolve(string[0].toUpperCase());
    };
  });
  return newProm;
};

fun1("madhu").then((value) => console.log(value)).catch((error) => console.log(error));
fun1(555).then((value) => console.log(value)).catch((error) => console.log(error));
