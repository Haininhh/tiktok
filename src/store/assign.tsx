import { Dispatch } from "react";

export interface InitState {
    todos: string[],
    todoInput: string,
}
export interface Value {
    value: (InitState | Dispatch<any>)[] 
}