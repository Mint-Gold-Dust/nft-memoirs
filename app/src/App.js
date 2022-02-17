import React, { useContext } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { CeramicContext } from './providers/CeramicContext';
import { EthereumContext } from './providers/EthereumContext';

function App() {
  const { ceramic, connectAndAuthenticate, isAuthenticated, isConnected } = useContext(CeramicContext);
  const { ethereumProvider, isConnected: walletIsConnected } = useContext(EthereumContext);

  const onClick = () => {
    connectAndAuthenticate();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a onClick={onClick} role="link">
          <p className="App-link">Connect and Authenticate</p>
        </a>
        {walletIsConnected ? <p>{`Ethereum provider: ${ethereumProvider}`}</p> : null}
        {isConnected ? <p>{`Ceramic client: ${ceramic}`}</p> : null}
        {isAuthenticated ? <p>{`Authenticated user: ${ethereumProvider.enable()}`}</p> : null}
      </header>
    </div>
  );
}

export default App;
