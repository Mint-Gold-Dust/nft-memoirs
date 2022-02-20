import React, { useContext, useEffect } from 'react';
import { EthereumAuthProvider } from '@self.id/web';
import CeramicClient from '@ceramicnetwork/http-client';
import { rootSchema, memoirSchema } from '../schemas';

export const createMemoirs = (did, content, schemaID) => {
  return did.client.tileLoader.create(content, {schemaID});
};

export const createSchema = (did, schemaObject) => {
    return did.client.tileLoader.create(schemaObject);
  };

export const loadDoc = (did, id) => {
  return  did.client.tileLoader.load(id);
};


