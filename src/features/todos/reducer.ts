import { Todo } from 'MyModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadTodosAsync, addTodo, removeTodo } from './actions';

const initialTodos: Todo[] = [
  {
    id: '0',
    title: 'You can add new todos using the form or load saved snapshot...',
  },
];

const reducer = combineReducers({
  isLoadingTodos: createReducer(false as boolean)
    .handleAction([loadTodosAsync.request], (state, action) => true)
    .handleAction(
      [loadTodosAsync.success, loadTodosAsync.failure],
      (state, action) => false
    ),
  todos: createReducer(initialTodos)
    .handleAction(loadTodosAsync.success, (state, action) => action.payload)
    .handleAction(addTodo, (state, action) => [...state, action.payload])
    .handleAction(removeTodo, (state, action) =>
      state.filter(i => i.id !== action.payload)
    ),
});

export default reducer;
export type TodosState = ReturnType<typeof reducer>;
