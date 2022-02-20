import React, { createContext, useContext, useEffect } from 'react';
import { useViewerConnection } from '@self.id/react';
import { EthereumAuthProvider } from '@self.id/web';
import { EthereumContext } from './EthereumContext';

const CeramicContext = createContext(undefined);

const CeramicContextProvider = ({ children, config = {} }) => {
    const [connection, connect, deauthenticate] = useViewerConnection();
    const { ethereumProvider, isConnected, connectWallet } = useContext(EthereumContext);

    const isAuthenticated = connection.status === 'connected';
    const isLoading = connection.status === 'connecting';

    const authenticate = () => {
      if (isConnected) {
        ethereumProvider
          .request({ method: 'eth_requestAccounts' })
          .then((addresses) => new EthereumAuthProvider(ethereumProvider, addresses[0]))
          .then(connect);
      } else {
        connectWallet();
      }
    };

    useEffect(() => {
      if (isConnected) {
        authenticate();
      }
    }, [isConnected]);

    useEffect(() => {
      if (window && window.ethereum && !isConnected) {
        authenticate();
      }
    }, []);

    return (
        <CeramicContext.Provider
            value={{
                authenticate,
                deauthenticate,
                isAuthenticated,
                isLoading,
            }}
        >
            { children }
        </CeramicContext.Provider>
    )
}

export {
    CeramicContext,
    CeramicContextProvider,
};
