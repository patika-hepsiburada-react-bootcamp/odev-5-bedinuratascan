import { createContext, useState, useContext, FC } from "react";
import { TodosContextState } from "./types";

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {},
};

export const TodoContext =
  createContext<TodosContextState>(contextDefaultValues);

const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
