import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

export const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!text) return;
      addTodo(text);
      setText('');
    }}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
};
