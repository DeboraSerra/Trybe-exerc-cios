export const LOGIN = 'LOGIN';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const addToList = (client) => ({
  type: ADD_LIST,
  client,
})

export const removeFromList = (client) => ({
  type: REMOVE_LIST,
  client,
})
