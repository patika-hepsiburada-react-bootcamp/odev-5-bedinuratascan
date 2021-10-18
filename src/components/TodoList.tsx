import React from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useTodo()!;

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
