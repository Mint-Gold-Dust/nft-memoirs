import React, { useContext } from 'react';
import './styles/App.css';
import { CeramicContext } from './providers/CeramicContext';
import { EthereumContext } from './providers/EthereumContext';
import Page from './components/Page';

function App() {

  return (
    <Page />
  );
}

export default App;
