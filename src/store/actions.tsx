import { ADD_TODO_INPUT, SET_TODO_INPUT } from "./constants";

export const setTodoInput = (payload: any) => ({
    type: SET_TODO_INPUT,
    payload
})
export const addTodoList = (payload: any) => ({
    type: ADD_TODO_INPUT,
    payload
})