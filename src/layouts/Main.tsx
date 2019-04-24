import React, { FC } from 'react';

import './Main.css';
import logo from '../assets/logo.svg';
import FlexRow from '../components/FlexRow';

type Props = {
  renderActionsMenu?: () => JSX.Element;
};

const Main: FC<Props> = ({ children, renderActionsMenu }) => (
  <div className="App">
    <header className="App-header">
      <FlexRow
        grow={1}
        align="center"
        justify="space-between"
        style={{ padding: '0 60px' }}
      >
        <FlexRow align="center">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </FlexRow>
        {renderActionsMenu && renderActionsMenu()}
      </FlexRow>
    </header>
    <main className="App-main">{children}</main>
  </div>
);

export default Main;
