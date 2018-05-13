import * as React from 'react';
import { Todo } from '../models';

interface Props {
  item: Todo;
  toggleItem: () => void;
}

function TodoItem({ item, toggleItem }: Props) {
  return (
    <div onClick={toggleItem} style={getStyle(item.completed)}>
      {item.title}
    </div>
  );
}

const getStyle = (completed: boolean) => ({
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  ...(completed ? { textDecoration: 'line-through', opacity: 0.4 } : {}),
});

export default TodoItem;
