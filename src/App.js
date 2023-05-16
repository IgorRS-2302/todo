import { TodoItem } from "./components/TodoItem";
import Todo from './components/todo';
import { AllToDo } from "./todoContext";


function App() {
  return (
    <div className="App">
      <AllToDo>
        <Todo/>
      </AllToDo>
    </div>
  );
}

export default App;
