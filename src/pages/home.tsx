import * as React from 'react';

import Todos from '../features/todos/components/main';

export default () => (
  <React.Fragment>
    <h1>Welcome to "typesafe-actions" todo-app!</h1>
    <h2>⚠️⚠️⚠️ WARNING ️⚠️⚠️️⚠️️</h2>
    <h3>THIS SANDBOX IS NOW OUTDATED</h3>

    <p>There is a  new <b>UP-TO-DATE</b> version (including data fetching examples)
    located in the <a href="https://github.com/piotrwitek/typesafe-actions">typesafe-actions</a> repo: <a href="https://github.com/piotrwitek/typesafe-actions/tree/master/codesandbox">LINK</a>
    </p>

    <p>And here is a new CodeSandbox: <a href="https://codesandbox.io/s/github/piotrwitek/typesafe-actions/tree/master/codesandbox">LINK</a>
    </p>
    <Todos />
  </React.Fragment>
);
