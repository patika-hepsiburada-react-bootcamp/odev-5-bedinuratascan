import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos, checkCompleted, deleteTodo } = useTodo()!;

  return (
    <ul className="todo-list">
      {todos.map((item) => (
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
