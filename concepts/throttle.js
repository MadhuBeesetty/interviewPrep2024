// // what is a throttle?

// // imagine you are doing a scroll and want to fire a event every time you scroll.
// // when you start a scroll you make a call -- but can you make a call every scroll event?
// // if you do that then you will end up with 100's of API call in one single scroll.

// const throttle = (callBackFun, limit) => {
// let lastCall = 0;

//     return (apiendpoint) => {
//       let now = Date.now()
//       console.log(now, lastCall, limit);
//       if((now - lastCall) >= limit){
//         lastCall = now;
//         callBackFun(apiendpoint);
//       }
//     }
// };

// const apiFetch = async (query) => {
//   console.log(`i am fetching data for this ${query}`);
//   return await fetch(query)
//   .then((Response) => Response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
// };

// const throttleAPIFetch = throttle(apiFetch, 1000);

// throttleAPIFetch("https://dog.ceo/api/breeds/list/all"); // This will execute
// throttleAPIFetch("https://dog.ceo/api/breeds/list/all");
// throttleAPIFetch("https://dog.ceo/api/breeds/list/all");

const makingAPI = async (query) => {
  const data = await fetch(query);
  const responseData = await data.json();
  console.log(responseData);
  return responseData;
}

const throttle1 = (fn, delay) => {
  let previousCall = 0;
  return (query) => {
    if(previousCall + delay < Date.now()){
      previousCall = Date.now();
      const data = fn(query);
      console.log(data);
    }
  }
}


let throttleAPIFetch = throttle1(makingAPI, 1000);
throttleAPIFetch(`https://dog.ceo/api/breed/australian/images/random`);
setTimeout(() => throttleAPIFetch(`https://dog.ceo/api/breed/boxer/images/random`), 2000);
throttleAPIFetch(`https://dog.ceo/api/breed/boxer/images/random`);
