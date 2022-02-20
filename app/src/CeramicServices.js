import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { useViewerConnection, useViewerID, usePublicRecord, RequestClient } from '@self.id/react';
import { EthereumAuthProvider } from '@self.id/web';
import { EthereumContext } from './providers/EthereumContext';
import CeramicClient from '@ceramicnetwork/http-client';
import { rootSchema, memoirSchema } from './schemas';

const [connection, connect, disconnect, ...rest] = useViewerConnection();
const { ethereumProvider, isConnected, connectWallet } = useContext(EthereumContext);

const did = useViewerID();

export const createMemoirs = async (did,content, schemaID) => {
  let newDoc = await did.client.tileLoader.create(content, {schemaID});
  return newDoc;
};

export const createSchema = async (did, schemaObject) => {
    const newSchemaID = await did.client.tileLoader.create(schemaObject);
    return newSchemaID;
  };

export const loadDoc = async (did, id) => {
  const loadDoc = await did.client.tileLoader.load(id);
  return loadDoc;
};


