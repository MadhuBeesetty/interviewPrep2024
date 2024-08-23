import React, {useState, useEffect} from 'react';

// acting db for this exercise
let networks = [
  { text: "Facebook", done: false },
  { text: "Twitter", done: false },
  { text: "Pinterest", done: true },
  { text: "Youtube", done: true }
];

const fetchData = () => {
return new Promise(resolve => {
  setTimeout(() => {
    resolve([...networks]);
  }, 2000)
});
}

// For the purposes of this exercise, we do want to mutate
// the db when adding a new network
const addNetwork = (data) => {
return new Promise(resolve => {
  setTimeout(() => {
    networks = data;
    resolve([...networks]);
  }, 2000)
});
};

const SocialSurvery = () => {
const [items, setItems] = useState([]);
useEffect(() => {
  const data = fetchData();
  setItems();
}, []);

// const handleSubmit = () =>  {
//   console.log('Submitted!', items);
// }

// const handleAdd = () => {
//   const value = document.getElementById('network');

//   const data = addNetwork(value);
//   setItems([]);
// }

// const handleOnChange = () => {
//   // TODO 1: Implement
// };

// TODO 2: Implement loading element
return (
  <div>
    <h2>Social networks:</h2>
    <ol>
      {items.map((item, index) => (
        <li key={item.id}>
          <label>
            <input type="checkbox" disabled readOnly checked={item.done} onChange={this.handleOnChange} />
            <span>{item.text}</span>
          </label>
        </li>
      ))}
    </ol>
    <button onClick={this.handleSubmit}>Submit</button>
    <br/>
    <h2>Add network:</h2>
    <input id="network"/>
    <button onClick={this.handleAdd}>Add</button>
  </div>
)
}

export default SocialSurvery
