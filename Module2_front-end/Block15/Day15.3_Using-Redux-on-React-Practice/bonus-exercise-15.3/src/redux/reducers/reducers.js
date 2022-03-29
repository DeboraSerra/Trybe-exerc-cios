import { LOGIN, ADD_LIST, REMOVE_LIST } from "../actions";

const LOGIN_STATE = {
  email: '',
  password: '',
}

const CLIENT_LIST_STATE = {
  clients: [],
}

export const loginReducer = (state = LOGIN_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.email, password: action.password };
  default:
    return state;
  }
};

export const clientListReducer = (state = CLIENT_LIST_STATE, action) => {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, clients: [...state.clients, action.client]};
    case REMOVE_LIST:
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.client.id),
      };
    default:
      return state;
  }
}
