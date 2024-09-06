import React, {useState} from 'react';

const CityInput = () => {
  const [city, updatecity] = useState("");

  const updateCityValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      updatecity(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder='city of zip code' onChange={(e) => updateCityValue(e)}></input>
    <button>submit</button>
    <p>weather for the {city} is as follows</p>
    </div>
  );
}

export default CityInput;
