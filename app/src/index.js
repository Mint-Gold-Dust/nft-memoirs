import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '@self.id/react';
import App from './App';
import { EthereumContextProvider } from './providers/EthereumContext';
import { CeramicContextProvider } from './providers/CeramicContext';
import './styles/index.css';

const config = {
  ceramic: 'testnet-clay',
};

ReactDOM.render(
  <React.StrictMode>
    <EthereumContextProvider>
      <CeramicContextProvider>
        <Provider client={config}>
          <App />
        </Provider>
      </CeramicContextProvider>
    </EthereumContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
