import type { Todo } from '../types/todo';
import { useTodos } from '../contexts/TodoContext';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
};
