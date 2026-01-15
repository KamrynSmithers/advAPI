import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterButtons } from './components/FilterButtons';
import { ThemeToggleButton } from './components/ThemeToggleButton';

function App() {
  return (
    <>
      <ThemeToggleButton />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </>
  );
}

export default App;
