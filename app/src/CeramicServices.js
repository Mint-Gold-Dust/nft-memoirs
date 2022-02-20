import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
// import { useViewerConnection, useViewerID, usePublicRecord, RequestClient } from '@self.id/react';
import { EthereumAuthProvider } from '@self.id/web';
// import { EthereumContext } from './providers/EthereumContext';
import CeramicClient from '@ceramicnetwork/http-client';
import { rootSchema, memoirSchema } from './schemas';

// const [connection, connect, disconnect, ...rest] = useViewerConnection();
// const { ethereumProvider, isConnected, connectWallet } = useContext(EthereumContext);

// const did = useViewerID();

export const createMemoirs = (did,content, schemaID) => {
  return did.client.tileLoader.create(content, {schemaID});
};

export const createSchema = (did, schemaObject) => {
    return did.client.tileLoader.create(schemaObject);
  };

export const loadDoc = (did, id) => {
  return  did.client.tileLoader.load(id);
};


