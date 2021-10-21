import Container from "./components/Container/Container";
import TodoProvider from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Container />
    </TodoProvider>
  );
}

export default App;
