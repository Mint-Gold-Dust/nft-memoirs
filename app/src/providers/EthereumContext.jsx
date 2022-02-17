import React, { createContext, useState } from 'react';
import Web3Modal from 'web3modal';

const EthereumContext = createContext(undefined);

const EthereumContextProvider = ({ children, providerOptions = {} }) => {
    const [provider, setProvider] = useState(null);
    const [isConnected, setIsConnected] = useState(null);

    const connectWallet = () => {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions,
            theme: "dark",
          });

       web3Modal.connect()
          .then((instance) => {
            setProvider(instance);
            setIsConnected(true);
          })
          .catch((error) => {
            setIsConnected(false);
            // Replace with error notification
            console.error('Web3Modal connection error:', error);
        });
    };

    return (
        <EthereumContext.Provider
            value={{
                connectWallet,
                ethereumProvider: provider,
                isConnected,
            }}
        >
            { children }
        </EthereumContext.Provider>
    )
}

export {
    EthereumContext,
    EthereumContextProvider,
};
