import { REQUEST_API, RESPONSE_API, ERROR_API } from '../actions';


const INITIAL_STATE = {
  isLoading: false,
  response: [],
  error: '',
}

export const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case RESPONSE_API:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: '',
      };
    case ERROR_API:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        response: [],
      };
    default:
      return state;
  }
}
