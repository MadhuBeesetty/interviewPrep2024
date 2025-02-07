data = [
  {
    user: "maddy",
    message: "Message 1",
    uniqueId: "a1b2c3d4e5",
    parentId: null
  },
  {
    user: "maddy 2",
    message: "Message 2",
    uniqueId: "f6g7h8i9j0",
    parentId: "a1b2c3d4e5"
  },
  {
    user: "maddy 3",
    message: "Message 3",
    uniqueId: "k1l2m3n4o5",
    parentId: "f6g7h8i9j0"
  },
  {
    user: "maddy 4",
    message: "Message 4",
    uniqueId: "p6q7r8s9t0",
    parentId: "k1l2m3n4o5"
  },
  {
    user: "maddy 5",
    message: "Message 5",
    uniqueId: "u1v2w3x4y5",
    parentId: "a1b2c3d4e5"
  },
  {
    user: "maddy 6",
    message: "Message 6",
    uniqueId: "z6a7b8c9d0",
    parentId: null
  },
  {
    user: "maddy 7",
    message: "Message 7",
    uniqueId: "e1f2g3h4i5",
    parentId: null
  },
  {
    user: "maddy 8",
    message: "Message 8",
    uniqueId: "j6k7l8m9n0",
    parentId: "e1f2g3h4i5"
  },
  {
    user: "maddy 9",
    message: "Message 9",
    uniqueId: "o1p2q3r4s5",
    parentId: "j6k7l8m9n0"
  },
  {
    user: "maddy 10",
    message: "Message 10",
    uniqueId: "t6u7v8w9x0",
    parentId: null
  }
]


//

sampleOutput = [
  {
    user: "maddy",
    message: "Message 1",
    uniqueId: "a1b2c3d4e5",
    parentId: null,
    children: [{
      user: "maddy 2",
      message: "Message 2",
      uniqueId: "f6g7h8i9j0",
      parentId: "a1b2c3d4e5",
      children: [...]
    }, ...]
  }
]

const fun = (arr) => {
let output = [];
for(var i = 0; i< arr.length; i++){
  if(arr[i].parentId){
      //loop thought the output and find the parentId;
      if(children){
        //loop through the children and if any of the children is the parent id:
      }
  }else{
    let obj = arr[i];
    obj["children"] = [];
  }
}
}

fun({
  user: "maddy",
  message: "Message 1",
  uniqueId: "a1b2c3d4e5",
  parentId: null
},
{
  user: "maddy 2",
  message: "Message 2",
  uniqueId: "f6g7h8i9j0",
  parentId: "a1b2c3d4e5"
},
{
  user: "maddy 3",
  message: "Message 3",
  uniqueId: "k1l2m3n4o5",
  parentId: "f6g7h8i9j0"
},)

output = [
  {
    user: "maddy",
    message: "Message 1",
    uniqueId: "a1b2c3d4e5",
    parentId: null,
    children: [];
  }
]
