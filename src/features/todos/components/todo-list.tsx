import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { todosModels, todosActions, todosSelectors } from '../';
import TodoItem from './todo-item';

interface Props {
  todos: todosModels.Todo[];
  toggleTodo: (id: string) => any;
}

function TodoList({ todos = [], toggleTodo }: Props) {
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

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  width: 200,
});

const mapStateToProps = (state: RootState) => ({
  todos: todosSelectors.getFilteredTodos(state.todos),
});

export default connect(mapStateToProps, {
  toggleTodo: (id: string) => todosActions.toggle({ id }),
})(TodoList);
