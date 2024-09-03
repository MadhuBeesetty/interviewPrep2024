// schedule is a bunch a tasks but each task has a numbe of dependencies and the task be completed only when all the dependency tasks are completed. write an algorithm to complete all tasks

// uber interview question

const schedule = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["f"] },
  { id: "f", dependencies: [] },
];

const taskScheduler = (schedule) => {

    const removeTaskFromSchedule = (id) => {
        schedule.forEach((element) => {
            const removingdependency = element.dependencies.indexOf(id);
            if(removingdependency !== -1){
                element.dependencies.splice(removingdependency, 1);
            }
        });
    };

    const executeTasks = (individualTask) => {
        if (schedule.length === 0) return;
        if(individualTask?.dependencies?.length){
        }else{
            console.log(individualTask.id, "task is executed");
            removeTaskFromSchedule(individualTask.id);
            const completedSchedule = schedule.indexOf(individualTask);
            schedule.splice(completedSchedule, 1);
            console.log(completedSchedule, schedule, "this is completed schedule");
        }
    };
    
    while (schedule.length > 0){
        schedule.forEach((element) => {
          executeTasks(element);
        });
    }
};

taskScheduler(schedule);