import React, { useReducer } from 'react';
import TodoList from './TodoList';
import { TodoContext } from './todoReducer';
import { todoReducer } from './todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
