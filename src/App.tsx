import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import Home from './routes/Home';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={Home} />
            <Route render={() => <div>Page not found!</div>} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
