import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useTodo } from "../contexts/TodoContext";

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
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default Form;
