import { useState, useEffect } from "react";
import "./App.css";
export function Todo() {
  const [todosArr, setTodosArr] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosArr));
  }, [todosArr]);

  const addTask = (task) => {
    const newTask = { task: task, completed: false };
    setTodosArr([...todosArr, newTask]);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todosArr.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodosArr(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todosArr.filter((todo, i) => i !== index);
    setTodosArr(updatedTodos);
  };
  return (
    <div className="Todo">
      <h1>TODO`s</h1>
      <h3>Local Storage CRUD app</h3>
      <h4>CRUD - Creade Read Delete</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(e.target.task.value);
          e.target.task.value = "";
        }}
      >
        <label htmlFor="">AddTodo</label>
        <input type="text" name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todosArr.map((todo, i) => (
          <li key={i}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(i)}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
