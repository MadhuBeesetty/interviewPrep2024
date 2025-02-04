import {useState} from "react";
import InputData from "./InputData";

const MainComponent = () => {
const [data, updateData] = useState(["item1","item2","item3"]);

const updateInputDataCallBack = (newData) => {
    updateData([...data, newData]);
}

const deleteInput = (index) => {
  data.splice(index, 1);
}

  return(
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <input type="submit" value="delete" onClick={deleteInput(index)}/>
          </li>
        ))}
      </ul>
      main component
    <InputData updateInputDataCallBack={updateInputDataCallBack}/>
    </div>
  )
}

export default MainComponent;
