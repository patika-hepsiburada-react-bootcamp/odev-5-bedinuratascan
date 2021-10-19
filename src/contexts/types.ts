export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IContext {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  checkCompleted: (selectedTodo: ITodo) => void;
  deleteTodo: (id: string) => void;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  clearCompletedTodos: () => void;
}
