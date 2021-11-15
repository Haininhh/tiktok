import { InitState } from "./assign";
import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

const reducer = (state: InitState, action: any) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };
    case EDIT_TODO:
      return {
        ...state,
        todoInput: action.payload,
      };
    default:
      throw new Error("Invalid action.");
  }
};
export { initState };
export default reducer;
