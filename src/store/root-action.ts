import { RouterAction, LocationChangeAction } from 'connected-react-router';

import { TodosAction } from '../features/todos';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | TodosAction;
