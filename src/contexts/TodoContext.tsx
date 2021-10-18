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
      completed: true,
    },
    {
      id: "3",
      title: "text3",
      completed: false,
    },
  ]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
