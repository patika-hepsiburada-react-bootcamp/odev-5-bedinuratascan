import './Form.css';
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useTodo } from "../../contexts/TodoContext";

const Form = () => {
  const [title, setTitle] = useState<string>("");
  const { addTodo } = useTodo()!;

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      completed: false,
    };

    if (title === "") {
      alert("Enter the title, please!");
    } else {
      addTodo(newTodo);
      setTitle("");
    }
  };

  return (
    <form onSubmit={onsubmit} className="todo__form">
      <div className="todo__input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
        />
      </div>
      <button className="todo__add__button" type="submit" value="Submit">
        <svg viewBox="0 0 40 40">
          <path d="M10 20 L30 20 M20 10 L20 30" />
        </svg>
      </button>
    </form>
  );
};

export default Form;
