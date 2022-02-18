import React, { useContext } from 'react';
import './styles/App.css';
import { CeramicContext } from './providers/CeramicContext';
import { EthereumContext } from './providers/EthereumContext';
import Page from './components/Page';

function App() {
  const { ceramic, connectAndAuthenticate, isAuthenticated, isConnected } = useContext(CeramicContext);
  const { ethereumProvider, isConnected: walletIsConnected } = useContext(EthereumContext);

  const onClick = () => {
    connectAndAuthenticate();
  };

  return (
    <Page />
  );
}

export default App;
