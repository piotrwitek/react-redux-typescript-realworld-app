import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { TodosAction } from '../features/todos';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | TodosAction;
