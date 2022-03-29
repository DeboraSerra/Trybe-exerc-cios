export const ADD_TASK = 'ADD_TASK';

export const SELECT_TASK = 'SELECT_TASK';

export const COMPLETE_TASK = 'COMPLETE_TASK';

export const REMOVE_TASK = 'REMOVE_TASK';

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  task,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const selectTask = (task) => ({
  type: SELECT_TASK,
  task,
});

export const completeTask = (task) => ({
  type: COMPLETE_TASK,
  task,
});
