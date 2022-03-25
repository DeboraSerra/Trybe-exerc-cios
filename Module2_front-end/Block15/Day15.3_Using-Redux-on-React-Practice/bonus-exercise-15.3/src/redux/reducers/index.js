import { combineReducers } from 'redux';
import { loginReducer, clientListReducer  } from './reducers';

const rootReducer = combineReducers({
  loginReducer,
  clientListReducer,
});

export default rootReducer;
