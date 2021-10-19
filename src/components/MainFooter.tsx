import { CompletionTriggerKind } from "typescript";
import { useTodo } from "../contexts/TodoContext";

const MainFooter = () => {
  const { todos, selectedTab, setSelectedTab, clearCompletedTodos } =
    useTodo()!;
  const itemsLeft = todos.filter((item) => !item.completed);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft.length}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={selectedTab === "All" ? "selected" : ""}
            onClick={() => setSelectedTab("All")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectedTab === "Active" ? "selected" : ""}
            onClick={() => setSelectedTab("Active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectedTab === "Completed" ? "selected" : ""}
            onClick={() => setSelectedTab("Completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompletedTodos()}>
        Clear completed
      </button>
    </footer>
  );
};

export default MainFooter;
