import './FilterTabs.css';
import { useTodo } from "../../contexts/TodoContext";

const FilterTabs = () => {
  const { todos, selectedTab, setSelectedTab, clearCompletedTodos } =
    useTodo()!;
  const completedItems = todos.filter((item) => item.completed);

  return (
    <div className="filter__todos">
      <span>{completedItems.length} / {todos.length} completed</span>
      <button
        className={selectedTab === "All" ? "selected__button" : ""}
        onClick={() => setSelectedTab("All")}
      >
        All
      </button>
      <button
        className={selectedTab === "Active" ? "selected__button" : ""}
        onClick={() => setSelectedTab("Active")}
      >
        Active
      </button>
      <button
        className={selectedTab === "Completed" ? "btn-active" : ""}
        onClick={() => setSelectedTab("Completed")}
      >
        Completed
      </button>
      <button onClick={() => clearCompletedTodos()}>
        <i className="fa fa-trash-o" aria-hidden="true"></i>Clear completed
      </button>
    </div>
  );
};

export default FilterTabs;
