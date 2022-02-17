import React, { createContext, useContext, useEffect, useState } from 'react';
import { CeramicClient } from '@ceramicnetwork/http-client';
import { DID } from 'dids';
import { getResolver as getKeyResolver } from 'key-did-resolver';
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver';
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import { EthereumContext } from './EthereumContext';

const CERAMIC_API_URL =  process.env.CERAMIC_API_URL || 'https://ceramic-clay.3boxlabs.com';

const CeramicContext = createContext(undefined);

const CeramicContextProvider = ({ children, config = {} }) => {
    const [ceramic, setCeramic] = useState({});
    const [isConnected, setIsConnected] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const { connectWallet, ethereumProvider, isConnected: walletIsConnected } = useContext(EthereumContext);

    const connectAndAuthenticate = () => {
        if(ethereumProvider === null) {
            connectWallet();
            return;
        }

        ethereumProvider.enable()
            .then((accounts) => {
                // Create an EthereumAuthProvider using the Ethereum provider and requested account
                const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0]);
                // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
                // generate the authentication secret
                const threeID = new ThreeIdConnect();

                threeID.connect(authProvider)
                    .then(() => {
                        const client = new CeramicClient(CERAMIC_API_URL);

                        const did = new DID({
                            provider: threeID.getDidProvider(),
                            resolver: {
                                ...get3IDResolver(client),
                                ...getKeyResolver(),
                            }
                        });
                        setIsConnected(true);

                        did.authenticate()
                            .then(() => {
                                // client.setDID(did);
                                setCeramic(client);
                                setIsAuthenticated(true);
                            })
                            .catch((error) => {
                                // setIsAuthenticated(false);
                                // Replace with error notification
                                console.error('Authetication error:', error);
                            });
                    })
                    .catch((error) => {
                        setIsConnected(false);
                        // Replace with error notification
                        console.error('3ID connection error:', error);
                    });
            });

    };

    useEffect(() => {
        if(walletIsConnected) {
            connectAndAuthenticate();
        }
    }, [walletIsConnected]);

    return (
        <CeramicContext.Provider
            value={{
                ceramic,
                isAuthenticated,
                isConnected,
                connectAndAuthenticate,
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
