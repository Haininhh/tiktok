import { createContext, Dispatch } from "react";
import { InitState } from "./assign";

const Context = createContext<(InitState | Dispatch<any>)[] | null>(null)

export default Context;