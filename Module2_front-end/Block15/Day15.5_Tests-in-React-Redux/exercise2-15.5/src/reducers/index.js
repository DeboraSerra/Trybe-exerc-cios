import { ADD_TASK, SELECT_TASK, COMPLETE_TASK, REMOVE_TASK } from '../actions';

const INITIAL_STATE_TASK_LIST = {
  tasks: [],
}

const INITIAL_STATE_SELECTED = {
  task: '',
}

const INITIAL_STATE_COMPLETED = {
  tasks: [],
  isComplete: {},
}

export const addTasksReducer = (state = INITIAL_STATE_TASK_LIST, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task !== action.task),
      };
    default:
      return state;
  };
}

export const completeTasksReducer = (state = INITIAL_STATE_COMPLETED, action) => {
  switch (action.type) {
    case COMPLETE_TASK:
      const taskComplete = state.isComplete[action.task];
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        isComplete: {
          ...state.isComplete,
          [action.task]: taskComplete ? !taskComplete : true,
        }
      }
    default:
      return state;
  };
}

export const selectTaskReducer = (state = INITIAL_STATE_SELECTED, action) => {
  switch (action.type) {
    case SELECT_TASK:
      return {
        ...state,
        task: state.task === action.task ? '' : action.task,
      }
    default:
      return state;
  };
}
