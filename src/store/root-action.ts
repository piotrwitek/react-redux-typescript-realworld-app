import { RouterAction, LocationChangeAction } from "react-router-redux";
type ReactRouterAction = RouterAction | LocationChangeAction;

import { TodosAction } from "../features/todos";

export type RootAction = ReactRouterAction | TodosAction;
