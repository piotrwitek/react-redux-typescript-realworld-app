import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import store, { history } from './store';
import Home from './routes/Home';
import { getPath } from './router-paths';
import AddArticle from './routes/AddArticle';
import EditArticle from './routes/EditArticle';
import ViewArticle from './routes/ViewArticle';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={getPath('home')} render={Home} />
            <Route exact path={getPath('addArticle')} render={AddArticle} />
            <Route
              exact
              path={getPath('editArticle', ':articleId')}
              render={props => <EditArticle {...props} />}
            />
            <Route
              exact
              path={getPath('viewArticle', ':articleId')}
              render={props => <ViewArticle {...props} />}
            />
            <Route render={() => <div>Page not found!</div>} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
