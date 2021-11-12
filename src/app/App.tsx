import { useLayoutEffect, useReducer } from "react";
// Init state
const initState = 1;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const DEFAULT_ACTION = 0;

// Reducer
const reducer = (state: number, action: string | number) => {
  console.log("reducer running...");

  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    case DEFAULT_ACTION:
      return 0;
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  useLayoutEffect(() => {
    if (count <= 0) return dispatch(DEFAULT_ACTION);
  }, [count]);

  return (
    <div style={{ margin: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
