import React from "react";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList/>
    </section>
  );
};

export default Main;
