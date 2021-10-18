import { createContext, useState, useContext, FC } from "react";
import { ITodo, IContext } from "./types";

export const TodoContext = createContext<IContext | null>(null);

const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1",
      title: "text1",
      completed: false,
    },
    {
      id: "2",
      title: "text2",
      completed: false,
    },
  ]);

  return (
    <TodoContext.Provider
      value={{
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
