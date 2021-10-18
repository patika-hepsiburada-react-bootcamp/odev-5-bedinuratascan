// export type TodosContextState = {
//   todos: string[];
//   addTodo: (name: string) => void;
// };

export interface ITodo {
  id:string;
  title: string;
  completed: boolean;
};

export interface IContext {
  todos: ITodo[];
}


