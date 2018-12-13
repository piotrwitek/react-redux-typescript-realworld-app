import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { StateType } from 'typesafe-actions';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './root-reducer';
import rootEpic from './root-epic';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
export type RootState = StateType<typeof rootReducer>;

function configureStore(initialState?: {}) {
  // configure middlewares
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // start the epic
  epicMiddleware.run(rootEpic);
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
