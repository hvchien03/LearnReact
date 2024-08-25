import { SET_TODO_INPUT, ADD_TODO } from "./constants";

export const setToDoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};

export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
