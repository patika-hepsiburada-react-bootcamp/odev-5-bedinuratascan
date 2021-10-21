import Form from "../Form/Form";
import FilterTabs from "../FilterTabs/FilterTabs";
import TodoList from "../TodoList/TodoList";
import './Container.css'

const Container = () => {
  return (
    <div className="wrap">
      <h1>Todo App</h1>
      <div className="app">
        <Form />
        <TodoList/>
        <FilterTabs/>
      </div>
    </div>
  );
};

export default Container;
