import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { CeramicContextProvider } from './providers/CeramicContext';
import { EthereumContextProvider } from './providers/EthereumContext';

ReactDOM.render(
  <React.StrictMode>
    <EthereumContextProvider>
      <CeramicContextProvider>
        <App />
      </CeramicContextProvider>
    </EthereumContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
