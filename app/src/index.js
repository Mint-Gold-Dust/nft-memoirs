import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

// ctx
import { CeramicContextProvider } from './providers/CeramicContext';
import { EthereumContextProvider } from './providers/EthereumContext';

// components
import NavBar from '../src/components/NavBar';

// theme
import { theme } from './themes/theme';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <EthereumContextProvider>
      <CeramicContextProvider>
        <ThemeProvider theme={theme}>
          <NavBar />
          <App />
        </ThemeProvider>
      </CeramicContextProvider>
    </EthereumContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
