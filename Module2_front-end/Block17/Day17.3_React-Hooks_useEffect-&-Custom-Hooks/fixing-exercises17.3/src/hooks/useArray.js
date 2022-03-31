import { useState } from "react";

const useArray = () => {
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([...taskList, task])
  }
  return [taskList, addNewTask];
}

export default useArray;
