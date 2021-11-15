import { useRef } from "react";
import { actions, useStore } from "../store";
import { InitState } from "../store/assign";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput }: InitState = state;

  const inputRef: any = useRef();
  const liRef: any = useRef();

  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));

    inputRef.current.focus();
  };

  const handleEditTodo = () => {
    dispatch(actions.editTodo("abc"));
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>...</h1>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter input..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li ref={liRef} key={index} onClick={handleEditTodo}>
            {todo}{" "}
            <span onClick={() => dispatch(actions.deleteTodo(index))}>x</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
