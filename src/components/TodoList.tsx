import { useTodo } from "../contexts/TodoContext";
import { ITodo } from "../contexts/types";

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
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => checkCompleted(item)}
              checked={item.completed}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => deleteTodo(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
