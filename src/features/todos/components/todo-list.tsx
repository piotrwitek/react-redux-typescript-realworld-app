import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { models, actions, selectors } from '../';
import TodoItem from './todo-item';

interface Props {
  todos?: models.Todo[];
  toggleTodo?: (id: string) => void;
}

function TodoList({ todos, toggleTodo }: Props) {
  return (
    <ul style={getStyle()}>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem item={todo} toggleItem={() => toggleTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
}

const getStyle = () => ({
  textAlign: 'left',
  margin: 'auto',
  width: 200,
});

const mapStateToProps = (state: RootState) => ({
  todos: selectors.getFilteredTodos(state.todos),
});

export default connect(mapStateToProps, {
  toggleTodo: (id: string) => actions.toggle({ id }),
})(TodoList);
