import { Dispatch } from "react";

export interface InitState {
  todos: string[];
  todoInput: string;
}
export interface Value {
  state: InitState;
  dispatch: Dispatch<any>;
}
