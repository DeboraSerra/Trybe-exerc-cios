import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  )
}

ToDoList.defaultProps = {
  taskList: [],
}

export default ToDoList;
