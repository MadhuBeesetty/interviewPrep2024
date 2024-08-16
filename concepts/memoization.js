
// memoization is a technique used to optimize function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can significantly improve performance, especially for functions that are called repeatedly with the same arguments.

const memo = (fn) => {
 let catche = {}
 return (...args) => {
    const argsToPass = JSON.stringify(args);
    if(catche[argsToPass]){
        console.log(catche[argsToPass],catche, "this is memoized");
        return catche[argsToPass];
    } else {
        const result = fn.apply(this, args)
        catche[argsToPass] = result;
        console.log(result, catche, "this is non memoized");
        return result;
    }
 }
}

const addNumbers = (a,b,c) => a+b+c
const add = memo(addNumbers);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));
console.log(add(1, 2, 4));
console.log(add(1, 2, 4));

const palendrome = (a) => {
    let output = a;
    while(a>0){
        console.log(output,a);
        output = output * (a - 1);
        a = a - 1; 
    };
    return output;
};
const pal = memo(palendrome);
console.log(pal(4));
console.log(pal(4));
console.log(pal(5));
console.log(pal(3));