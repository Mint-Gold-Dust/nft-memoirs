import React from 'react';
import {
  Divider,
  Link,
  Image,
  Spacer,
  Text,
} from '@geist-ui/core'

function Nft({ nft, onSelect }) {
  if (!nft) {
    return null;
  }

  return (
    <>
      <Image src={nft?.media[0]?.uri?.gateway || 'https://etherscan.io/images/main/empty-token.png'} height="120px" width="100%" draggable={false} loading="lazy"/>
      <Text h4 mb={.2}>{nft.title}</Text>
      <Text type="secondary" small>{nft.description}</Text>
      <Spacer h={.4} />
      <Divider align="end"><Link color href="#" onClick={onSelect} >Select NFT</Link></Divider>
      <Spacer h={.7} />
    </>
  );
};

export default Nft;
