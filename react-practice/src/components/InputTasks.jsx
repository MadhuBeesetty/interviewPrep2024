import { useState } from "react";

const InputTasks = ({ addNewTasks }) => {
  const [individualPriority, updatePriority] = useState(0);
  const [individualTaskName, updateTaskName] = useState("");

  console.log(individualPriority, individualTaskName);
  const onInputChange = (e, inputId) => {
    if (inputId === "individualTask") {
      updateTaskName(e.target.value);
    } else if (inputId === "individualPriority") {
      updatePriority(e.target.value);
    }
  };

  const clickSubmit = () => {
    const newData = {
      priority: individualPriority,
      task: individualTaskName,
    };
    addNewTasks(newData);
    return;
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => onInputChange(e, "individualPriority")}
        placeholder="individualPriority"
      />
      <input
        type="text"
        onChange={(e) => onInputChange(e, "individualTask")}
        placeholder="individualTask"
      />
      <button onClick={() => clickSubmit()}>submit</button>
    </div>
  );
};

export default InputTasks;
