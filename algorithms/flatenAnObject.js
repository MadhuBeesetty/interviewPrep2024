// given a nested object which has nested arrays and string, flaten the object and return a single flat object. 

const obj = {
    "a": "5",
    "b": "6",
    "c": {
        "d": "7",
        "e":"8",
        "g": {
            "h": "12",
            "i": "13",
        }
    },
    "f": ["9","10","11", {
            "h": "12",
            "i": "13",
        }]
};

const flatObj = (obj) => {
    let outputObj = {};
    const flatobj1 = (obj1, parentkey) => {
        for(let key in obj1){
            if(typeof obj1[key] === "object"){
                const newKey = parentkey + key;
                flatobj1(obj1[key], newKey);
            }else{
                const newKey = parentkey + key;
                outputObj[newKey] = obj1[key];
            }
        }
    }  
    flatobj1(obj, "");
    return outputObj; 
}
console.log(flatObj(obj));

// const expectedOutput = {
//   a: '5',
//   b: '6',
//   cd: '7',
//   ce: '8',
//   cgh: '12',
//   cgi: '13',
//   f0: '9',
//   f1: '10',
//   f2: '11',
//   f3h: '12',
//   f3i: '13'
// }