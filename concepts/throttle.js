// what is a throttle?

// imagine you are doing a scroll and want to fire a event every time you scroll.
// when you start a scroll you make a call -- but can you make a call every scroll event?
// if you do that then you will end up with 100's of API call in one single scroll.

const throttle = (callBackFun, limit) => {
let lastCall = 0;

    return (apiendpoint) => {
      let now = Date.now()
      console.log(now, lastCall, limit);
      if((now - lastCall) >= limit){
        lastCall = now;
        callBackFun(apiendpoint);
      }
    }
};

const apiFetch = async (query) => {
  console.log(`i am fetching data for this ${query}`);
  return await fetch(query)
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
};

const throttleAPIFetch = throttle(apiFetch, 1000);

throttleAPIFetch("https://dog.ceo/api/breeds/list/all"); // This will execute
throttleAPIFetch("https://dog.ceo/api/breeds/list/all");
throttleAPIFetch("https://dog.ceo/api/breeds/list/all");
