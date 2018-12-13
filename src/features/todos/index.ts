import * as todosModels from './models';
import * as todosActions from './actions';
import todosReducer, { TodosState, TodosAction } from './reducer';
import * as todosSelectors from './selectors';

export {
  todosModels,
  todosActions,
  todosSelectors,
  todosReducer,
  // TodosState,
  // TodosAction,
};
// this is an ugly workaround due to CRA2.1 requiring isolatedModules = true
export type TodosState = TodosState;
export type TodosAction = TodosAction;
