import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { todosReducer } from '../features/todos';
import { History } from 'history';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  todos: todosReducer,
});

export default createRootReducer;
