// https://nekos.best/api/v2/neko

// const responseData = await fetch('https://nekos.best/api/v2/neko');

// console.log(responseData);

const fun = async () => {
  const responseData = await fetch('https://nekos.best/api/v2/neko');
  const data = await responseData.json();
  console.log(responseData);
  console.log(data);
}

// fun();

////

const fun1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    let success = false;
    if(success){
      resolve("hi");
    }else{
      reject("fail");
    }
  }, 2000)
});
}

// we are using async await instead of then here:
const callFun1 = async () => {
  try{
  let val = await fun1();
  console.log(val);
  }catch(error){
    console.log(error);
  }

}

// callFun1();

// fun1().then((val) => console.log(val)).catch((val) => console.log(val));

// https://www.jiosaavn.com/album/biba/98G3uzIs2qQ_

const fetchUser1 = new Promise((resolve, reject) =>{
  try{
    fetch('https://nekos.best/api/v2/neko')
    .then(response => response.json())
    .then(result => console.log(result));
    resolve(result);
  } catch {
    error => reject(error);
  }
});

// console.log(fetchUser1.then((data) => data))

async function foo() {
  console.log(1);         // ✅ Synchronous → Runs immediately
  await console.log(2);   // 🚨 Runs `console.log(2)`, but `await` applies to its return value
  console.log(3);         // 🕒 Deferred due to `await`
}

console.log(4);
foo();
console.log(5);
