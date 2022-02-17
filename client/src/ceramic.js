import { Ceramic } from '@ceramicnetwork/core';
import * as Ipfs from 'ipfs-core';
import dagJose from 'dag-jose';
import { convert } from 'blockcodec-to-ipld-format';
import KeyDidResolver from 'key-did-resolver';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import { DID } from 'dids';

const config = {};

const startCeramic = async () => {
  const dagJoseFormat = convert(dagJose);
  const ipfs = await Ipfs.create({ ipld: { formats: [dagJoseFormat] } });
  const ceramic = await Ceramic.create(ipfs, config);

  ceramic.setDID(
    new DID({
      resolver: {
        ...KeyDidResolver.getResolver(),
        ...ThreeIdResolver.getResolver(ceramic),
      },
    }),
  );

  return ceramic;
};

export { startCeramic };
