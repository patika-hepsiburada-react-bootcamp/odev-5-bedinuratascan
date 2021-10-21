import './TodoList.css';
import { useTodo } from "../../contexts/TodoContext";
import { ITodo } from "../../contexts/types";

let filteredTodos = Array<ITodo>();

const TodoList = () => {
  const { todos, checkCompleted, deleteTodo, selectedTab } = useTodo()!;

  if (selectedTab === "All") {
    filteredTodos = todos;
  } else if (selectedTab === "Active") {
    filteredTodos = todos.filter((item) => !item.completed);
  } else {
    filteredTodos = todos.filter((item) => item.completed);
  }

  return (
    <ul className="todo__list">
      {filteredTodos.map((item) => (
        <li>
          <input
            id={item.id}
            type="checkbox"
            onChange={() => checkCompleted(item)}
            checked={item.completed}
          />
          <label htmlFor={item.id}>
            {item.title}
            <span className="todo__strike"></span>
          </label>
          <button
            className="todo__remove"
            onClick={() => deleteTodo(item.id)}
          >
            <svg viewBox="0 0 40 40">
              <path d="M15 15 L25 25 M25 15 L15 25" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
