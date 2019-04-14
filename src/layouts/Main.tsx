import React, { FC } from 'react';

import './Main.css';
import logo from '../assets/logo.svg';

const Main: FC<{}> = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <main className="App-main">{children}</main>
  </div>
);

export default Main;
