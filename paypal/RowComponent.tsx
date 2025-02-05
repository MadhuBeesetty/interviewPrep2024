import React from 'react';
import { Customer } from '../types';

const RowComponent = (props: Customer) => {
  const {name, location, gender, age, income} = props;
return(
      <tbody data-testid='searched-customers'>
              <tr>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{location}</td>
                  <td>{gender}</td>
                  <td>{income}</td>
              </tr>
      </tbody>
)
};

export default RowComponent;
