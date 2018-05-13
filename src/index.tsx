import 'tslib';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Home from './routes/home';
import store from './store';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Root = () => (
  <div style={styles}>
    <Provider store={store}>
      <Home />
    </Provider>
  </div>
);

render(<Root />, document.getElementById('root'));
