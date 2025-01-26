
// A closure in JavaScript is when a function remembers its lexical scope, even when the function is executed
// outside that scope. In simpler terms, a closure allows an inner function to access variables from an outer
// function, even after the outer function has finished executing.

function outer() {
    let outerVar = "I'm outside!";

    function inner() {
        console.log(outerVar); // Accessing outer function's variable
    }

    return inner;
}

const closureFunc = outer(); // outer() returns inner function
closureFunc(); // Logs: "I'm outside!"

// Key Points:
// The inner function (inner) has access to variables in the outer function (outer).
// Even after outer has finished execution, closureFunc still "remembers" the outerVar value due to closure.
