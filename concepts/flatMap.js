const obj = [
  {name: "madhu", hobbies: ["sleeping", "drinking"]},
  {name: "madhu1", hobbies: ["sleeping", "drinking"]},
  {name: "madhu2", hobbies: ["sleeping", "drinking"]},
];

const hobbies = obj.flatMap((p) => p.hobbies);

console.log(hobbies);
