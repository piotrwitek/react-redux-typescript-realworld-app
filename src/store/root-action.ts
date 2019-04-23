import { routerActions } from 'connected-react-router';
import * as todosActions from '../features/todos/actions';

export default {
  router: routerActions,
  todos: todosActions,
};
