// What is Debounce?
// Debounce is a programming pattern used to limit how frequently a function is executed. The key idea is:

// The function is only executed once, and only after a specified delay, but the delay timer is reset
// every time the function is invoked.

// Use Case Example:
// Preventing rapid execution of a function during events like keystrokes, button clicks, or window resizing.
// For instance, updating a search query only after the user stops typing.

const Debounce = (fn, delay) => {
let timeout;

return (...args) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => fn(...args), delay);
}
}

const log = (x) => console.log(x);

const debounceFn = Debounce(log, 1000);
debounceFn(1);
debounceFn(2);
debounceFn(3);
debounceFn(4);
debounceFn(5);
