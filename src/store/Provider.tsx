import { Dispatch, useReducer } from "react";
import { InitState } from "./assign";
import Context from "./Context";
import reducer, { initState } from "./reducer";

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initState);

  let value: (InitState | Dispatch<any>)[] = [state, dispatch];

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
