import React from 'react';
import ReactDOM from 'react-dom';
import { GeistProvider, CssBaseline } from '@geist-ui/core'

import './styles/index.css';
import App from './App';
import { CeramicContextProvider } from './providers/CeramicContext';
import { EthereumContextProvider } from './providers/EthereumContext';

ReactDOM.render(
  <React.StrictMode>
    <EthereumContextProvider>
      <CeramicContextProvider>
        <GeistProvider>
          <CssBaseline />
          <App />
        </GeistProvider>
      </CeramicContextProvider>
    </EthereumContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
