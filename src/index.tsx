import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// tslint:disable-next-line:no-import-side-effect
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './pages/home';
import store from './store';

const styles: React.CSSProperties = {
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
