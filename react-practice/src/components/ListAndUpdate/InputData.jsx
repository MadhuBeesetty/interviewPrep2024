import {useState} from "react";

const InputData = ({updateInputDataCallBack}) => {
const [inputData, updateInputData] = useState("");

const updateData = (e) => {
  updateInputData(e.target.value);
}

const updateToParent = () => {
  updateInputDataCallBack(inputData);
  console.log("button is clicked");
}
console.log(inputData);
  return(
    <div>
      <input type="text" onChange={(e) => updateData(e)}/>
      <button onClick={updateToParent}>submit</button>
    </div>
  )
}

export default InputData;
