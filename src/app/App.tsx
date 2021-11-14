import React from 'react';
import { actions, useStore } from '../store';
import { InitState } from '../store/assign';
import "./App.css";




const App = () => {
  const [state, dispatch] = useStore()
  const { todos, todoInput }: InitState = state

  const handleAdd = () => {
    dispatch(actions.addTodoList(todoInput))
  }

  console.log(state);
  
  return (
      <div style={{ padding: 20 }}>
          <input
            value={todoInput}
            placeholder="Enter todo..."
            onChange={e => {dispatch(actions.setTodoInput(e.target.value))}}
          />
          <button onClick={handleAdd}>Add</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
      </div>
  )
}

export default App
