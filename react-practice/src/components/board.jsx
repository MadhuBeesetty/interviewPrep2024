import InputTasks from "./InputTasks";
import { useState } from "react";
import IndividualTask from "./IndividualTask";

const MockData = [
  {
    priority: 50,
    task: "first story",
    id: 1,
  },
];

const Board = () => {
  const [allTasks, updateAllTasks] = useState(MockData);

  // useCallback
  const addNewTasks = (individualTask) => {
    let tasksCopy = [...allTasks];
    tasksCopy.push(individualTask);
    tasksCopy.sort((a, b) => a.priority - b.priority);
    updateAllTasks(tasksCopy);
  };

  const removeIndividualTasks = (taskId) => {
    console.log("i am in remove individual task");
    let tasksCopy = [...allTasks];
    tasksCopy.splice(taskId, 1);
    updateAllTasks(tasksCopy);
  };

  return (
    <div className="App">
      <InputTasks addNewTasks={addNewTasks} />
      <ul>
        {allTasks.map((eachTask, index) => (
          <li>
            <IndividualTask
              task={eachTask.task}
              priority={eachTask.priority}
              Id={index}
              clearIndividualTask={removeIndividualTasks}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
