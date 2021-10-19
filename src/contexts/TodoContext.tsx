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
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const checkCompleted = (selectedTodo: ITodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const clearCompletedTodos = () => {
    const uncompletedTodos = todos.filter((item) => !item.completed);
    setTodos(uncompletedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        checkCompleted,
        deleteTodo,
        selectedTab,
        setSelectedTab,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
