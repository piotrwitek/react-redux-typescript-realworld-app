import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { StoreContext } from 'redux-react-hook';

import store, { history } from './store';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StoreContext.Provider value={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" render={Home} />
              <Route render={() => <div>Page not found!</div>} />
            </Switch>
          </ConnectedRouter>
        </StoreContext.Provider>
      </Provider>
    );
  }
}

export default App;
