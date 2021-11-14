import { InitState } from "./assign";
import { ADD_TODO_INPUT, SET_TODO_INPUT } from "./constants";

const initState = {
    todos: [],
    todoInput: "",
}

const reducer = (state: InitState , action: any) => {
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload ],
            }
        default:
            throw new Error("Invalid action.")
    }
}

export {initState}
export default reducer;