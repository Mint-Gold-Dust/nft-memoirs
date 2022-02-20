import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '@self.id/react';
import App from './App';
import { EthereumContextProvider } from './providers/EthereumContext';
import './styles/index.css';

const config = {
  ceramic: 'testnet-clay',
};

ReactDOM.render(
  <React.StrictMode>
    <EthereumContextProvider>
      <Provider client={config}>
        <App />
      </Provider>
    </EthereumContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
