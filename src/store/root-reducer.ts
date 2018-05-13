import {
  combineReducers,
  Dispatch as ReduxDispatch,
  Reducer as ReduxReducer,
} from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { RootAction } from './root-action';
import { todosReducer, TodosState } from '../features/todos';

export interface RootState {
  router: RouterState;
  todos: TodosState;
}

export default combineReducers<RootState, RootAction>({
  router: routerReducer,
  todos: todosReducer,
});

export type Dispatch = ReduxDispatch<RootAction>;
export type Reducer = ReduxReducer<RootState, RootAction>;

export type Services = {};
