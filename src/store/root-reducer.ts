import {
  combineReducers,
  Dispatch as ReduxDispatch,
  Reducer as ReduxReducer
} from "redux";
import { routerReducer, RouterState } from "react-router-redux";

import { reducer as todosReducer, TodosState } from "../features/todos";
import { RootAction } from "./root-action";

export interface RootState {
  router: RouterState;
  todos: TodosState;
}

export const rootReducer = combineReducers<RootState, RootAction>({
  router: routerReducer,
  todos: todosReducer
});

export type Dispatch = ReduxDispatch<RootAction>;
export type Reducer = ReduxReducer<RootState, RootAction>;

export type Services = {};
