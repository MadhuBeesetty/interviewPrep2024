import React, { useState, useEffect, ChangeEvent } from 'react';
import CustomerList from './CustomerList';
import customers from '../List';

const SearchCustomer: React.FC = () => {
  const [dataToRender, updateDataToRender] = useState(customers)
  const [seachInput, updateSearchInput] = useState("");

// search input you enter the data -> onChange calls updateSearchBoxInput
// -> filterText (looks at your name and location and filters new data)
// new hook save all fintered data and pass it to Customer List.

// on search i would implement debounce... i am typing too fast and i want to filter after one second.
// add unique ID to my row component with out messing CSS.

//   {
//     name: "Jeremy Clarke",
//     age: 21,
//     location: "Seattle",
//     gender: "Male",
//     income: "$120,000"
// }

  const filterText = (inputText: string) => {
    let output = [];
    let inputTextLength = inputText.length;
      for(var i = 0; i < customers.length; i++){
        if(inputText === customers[i].name.substring(0, inputTextLength) ||
          inputText === customers[i].location.substring(0, inputTextLength)
        ){
          output.push(customers[i]);
          updateDataToRender(output);
        }
      }
    return [];
  }

  const updateSearchBoxInput = (e: any) => {
    updateSearchInput(e.target.value);
    filterText(seachInput);
  }

  return (
    <>
       <div className='layout-row align-items-center justify-content-center mt-30'>
        <input className='large mx-20 w-20' data-testid='search-input' value={seachInput} placeholder='Enter search term (Eg: Phil)' onChange={(e) => updateSearchBoxInput(e)}/>
    </div>
    <CustomerList {...dataToRender}/>
    </>
  );
};

export default SearchCustomer;
