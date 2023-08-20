import React from 'react';
// import logo from './logo.svg';
import './App.css';

import UserStatus from './components/UserStatus';
import Chat from './components/Chat';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
      <div className="App-body">
        <h1>Proof of Status</h1>
        <div>
          Financial Capability Verification for Social and Business Interactions
        </div>
        <div>(based on Bitcoin)</div>
        <UserStatus />
        <Chat />
      </div>
    </div>
  );
}

export default App;
