import { useTodos } from '../contexts/TodoContext';
import { useFilter } from '../contexts/FilterContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  if (!filteredTodos.length) return <p>No todos yet!</p>;

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
