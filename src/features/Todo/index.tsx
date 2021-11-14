import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initState } from "./reducers";

export type InitState = {
  job: string;
  jobs: string[]
}
export interface Action {
  type: string,
  payload: any
}


function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs }: InitState = state;
  const inputRef: any = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))

    inputRef.current.focus();
  }
  
  return (
    <div style={{ margin: 20 }}>
      <input 
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job: string, index: number) => (
          <li key={index}>
            {job}  {`${" "}`}
            <span onClick={() => dispatch(deleteJob(index))}>x</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
