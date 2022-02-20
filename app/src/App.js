import React, { useContext } from 'react';
import './styles/App.css';
import { useViewerConnection, useViewerID, usePublicRecord, RequestClient } from '@self.id/react';
import { EthereumAuthProvider } from '@self.id/web';
import { EthereumContext } from './providers/EthereumContext';
import CeramicClient from '@ceramicnetwork/http-client';
import { rootSchema, memoirSchema } from './schemas';
import {createMemoirs, createSchema,loadDoc} from './CeramicServices'
import Page from './components/Page';

function App() {
  // const [connection, connect, disconnect, ...rest] = useViewerConnection();
  // const { ethereumProvider, isConnected, connectWallet } = useContext(EthereumContext);

  // const did = useViewerID();

  // const memoirs = {
  //   title: 'bool',
  //   content: 'bool',
  // };

  // const authenticate = () => {
  //   if (isConnected) {
  //     ethereumProvider
  //       .request({ method: 'eth_requestAccounts' })
  //       .then((addresses) => new EthereumAuthProvider(ethereumProvider, addresses[0]))
  //       .then(connect);
  //   } else {
  //     connectWallet();
  //   }
  // };

  // useEffect(() => {
  //   if (isConnected) {
  //     authenticate();
  //   }
  // }, [isConnected]);

  // useEffect(() => {
  //   if (connection.status === 'connected') {
  //     console.log('connection.selfID',connection.selfID)
  //     console.log('rootSchema, memoirSchema', rootSchema, memoirSchema);
  //     console.log('connection', connection);
  //     console.log(' ...rest', rest);
  //     console.log('did', did);
  //   }
  // }, [connection]);


  return (
    <Page />
  );
}

export default App;
