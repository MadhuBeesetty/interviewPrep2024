const IndividualTask = ({ priority, task, Id, clearIndividualTask }) => {
  const clearTask = (Id) => {
    console.log("i am in celar task ");
    clearIndividualTask(Id);
    return;
  };

  return (
    <li>
      <p>
        {priority} - {task}
      </p>
      <button onClick={() => clearTask(Id)}>clear task</button>
    </li>
  );
};

export default IndividualTask;
