import { createStore, combineReducers } from 'redux';
import { addTasksReducer,
  completeTasksReducer,
  selectTaskReducer } from '../reducers';

const rootReducer = combineReducers({
  addTasksReducer,
  completeTasksReducer,
  selectTaskReducer,
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

export default store;
