import * as React from 'react';

import TodoList from './todo-list';
import TodoForm from './todo-form';
import TodoFilters from './todo-filters';

export default () => (
  <React.Fragment>
    <TodoForm />
    <br />
    <TodoFilters />
    <br />
    <TodoList />
  </React.Fragment>
);
