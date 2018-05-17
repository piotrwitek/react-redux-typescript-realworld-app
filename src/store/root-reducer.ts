import {
  combineReducers,
} from 'redux';
import { routerReducer } from 'react-router-redux';
import {StateType} from 'typesafe-actions';

import { todosReducer } from '../features/todos';

const rootReducer = combineReducers({
  router: routerReducer,
  todos: todosReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
