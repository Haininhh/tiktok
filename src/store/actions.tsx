import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from "./constants";

export const setTodoInput = (payload: string) => ({
  type: SET_TODO_INPUT,
  payload,
});
export const addTodo = (payload: string) => ({
  type: ADD_TODO,
  payload,
});
export const deleteTodo = (payload: string | number) => ({
  type: DELETE_TODO,
  payload,
});
export const editTodo = (payload: string | number) => ({
  type: EDIT_TODO,
  payload,
});
