import React, {useState} from 'react';
import { Customer } from '../types';
import RowComponent from './RowComponent';
import customers from '../List';
import { JSX } from 'react/jsx-runtime';
// data list
// step 1: CustomerList -> list and initially render everything
// step 2: filtered Data -> render only filtered data.
// step 3: searcch - > function which filters data and rendered filtered data.

// React:
// row Component -> 5 filds.
// Parent thats wraps the row components
// render data -- whole list / filter List -> map render the row components.

const CustomerList: React.FC = (props) => {
    const {dataToRender} = props;
console.log(dataToRender, "this is data");
// const [dataToRender, updateDataToRender] = useState(customers)
  return (
      <div className='layout-column align-items-center justify-content-start'>
        {dataToRender.length === 0 ? (<p data-testid='no-results'>No Results Found!</p>) : (<></>)}
          <div className='card w-40 pt-30 pb-8 mt-20'>
                  <table>
                      <thead>
                      <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Location</th>
                          <th>Gender</th>
                          <th>Income</th>
                      </tr>
                      </thead>
                      {dataToRender.map((eachCustomer: JSX.IntrinsicAttributes & Customer) => (
                        <RowComponent {...eachCustomer}/>
                      ))}
                  </table>
              </div>

      </div>
    )
};

export default CustomerList;
