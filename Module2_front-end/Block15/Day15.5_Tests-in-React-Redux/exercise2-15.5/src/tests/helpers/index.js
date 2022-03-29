import React from "react";
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import { createStore, combineReducers } from "redux";
import { addTasksReducer, completeTasksReducer, selectTaskReducer} from "../../reducers";

const rootReducer = combineReducers({
  addTasksReducer,
  completeTasksReducer,
  selectTaskReducer
});

const renderWithRedux= (
  component,
  { initialState,
    store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;
