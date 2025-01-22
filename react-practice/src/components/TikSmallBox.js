import { useState } from "react";
import '../App.css';

const TikSmallBox = ({data}) => {
const [localState, updateLocalState] = useState("");

const updateTheValue = () => {
  // if(player === "player1"){
  //   updateLocalState("X")
  // }else{
  //   updateLocalState("O")
  // }
  console.log("i am clicked");
}
  return (
    <div className="box" onClick={updateTheValue}>
      <p>{data}</p>
      {localState}
    </div>
  );
}

export default TikSmallBox;
