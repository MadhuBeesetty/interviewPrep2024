// what is a debounce?

// imagine a google serach and a user is typing really fast and google
// gives us suggestions on every single key stroke and every key stroke is an API call,
// what if each API call takes 1 sec and you can type 5 keys in 1 sec,
// so one API call will be success and other 4 will be queued which are useless.

// By implementing de bounce we can avoide API calls during a time interval, by adding a 1 sec timeout to above example,
// we make only one API call irrespective of number of keys you type.

const fetchAPI = async (query) => {
  console.log(`i am fetching data for this ${query}`);
  return await fetch(query)
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
};

const debounceFetch = (callbackFun, delay) => {
  let timer;
  return (value) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      callbackFun(value);
    }, delay)
  }
}

const debouncedAPIFetch = debounceFetch(fetchAPI, 1000);

debouncedAPIFetch("https://dog.ceo/api//list/all"); // This will not execute if another call happens within 10 seconds
debouncedAPIFetch("https://dog.ceo/api//list/all");
debouncedAPIFetch("https://dog.ceo/api/breeds/list/all"); // Only this will execute after 10 seconds
