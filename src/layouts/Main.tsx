import React, { FC } from 'react';

import './App.css';
import logo from '../assets/logo.svg';

const Main: FC<{}> = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    {children}
  </div>
);

export default Main;
