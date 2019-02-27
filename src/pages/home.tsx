import * as React from 'react';

import Todos from '../features/todos/components/main';

export default () => (
  <React.Fragment>
    <h1>Welcome to "typesafe-actions" todo-app!</h1>
    <h2>⚠️ ⚠️ ⚠️ WARNING!!! THIS REPO IS NOW OUTDATED!!! ⚠️ ⚠️ ⚠️</h2>

    <p>There is a brand new <b>UP-TO-DATE</b> version including data fetching examples
    located in the `typesafe-actions` repo: <a href="https://github.com/piotrwitek/typesafe-actions/tree/master/codesandbox">Link</a>
    </p>

    <p>And here is a new CodeSandbox: <a href="https://codesandbox.io/s/github/piotrwitek/typesafe-actions/tree/master/codesandbox">Link</a>
    <Todos />
  </React.Fragment>
);
