import React, { useState } from 'react';
import useArray from '../hooks/useArray';
import ToDoList from './ToDoList-Fixing2';

const ToDoInput = () => {
  const [myTask, setMyTask] = useState('');
  const [taskList, addNewTask] = useArray();

  const addTask = (e) => {
    e.preventDefault();
    addNewTask(myTask);
    setMyTask('');
  }

  return (
    <section>
      <form onSubmit={ addTask }>
        <input
          type="text"
          name="task"
          placeholder="Type your task"
          value={ myTask }
          onChange={ (e) => setMyTask(e.target.value)}
        />
        <button type="submit" onClick={ addTask }>
          Add task
        </button>
      </form>
      <ToDoList tasks={taskList} />
    </section>
  )
}

export default ToDoInput;
