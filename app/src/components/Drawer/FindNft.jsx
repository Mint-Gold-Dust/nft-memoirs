import React, { useState } from 'react';
import {
  Button,
  Card,
  Drawer,
  Grid,
  Input,
  Loading,
  Spacer,
  Tag,
  Tooltip,
} from '@geist-ui/core';
import Search from '@geist-ui/icons/search';

import { getNft } from '../../services/alchemy';
import { trim, isAddress } from '../../utils/ethereumAddress';
import Nft from '../Nft';

function SelectNft({ onSelect }) {
  const [nft, setNft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenId, setTokenId] = useState(Math.floor(Math.random() * 50));
  const [contract, setContract] = useState('0xb305904aab1d1041b9c237e46a68fc9a22d60bc2');

  const loadNft = () => {
    setNft(null);
    setIsLoading(true);

    getNft(contract, tokenId)
      .then((result) => {
        setNft(result);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Drawer.Subtitle>Find NFT by contract and unique token id. </Drawer.Subtitle>
      <Drawer.Content width="380px">
        <Grid.Container gap={.5} justify="center">
          {
            isAddress(contract) &&
              <Grid>
                <Tooltip text={contract} placement="topEnd" type="dark"><Tag type="secondary">Contract: {trim(contract)}</Tag></Tooltip>
              </Grid>
          }
        </Grid.Container>
        <Spacer h={.7} />
        <Card>
          <Input
            placeholder="0x0000000000000000000000000000000000000000"
            value={contract}
            onChange={(event) => setContract(event.target.value)}
            width="95%"
            scale={2/3}
          >
            Contract address
          </Input>
          <Spacer h={1} />
          <Input
            placeholder="147"
            value={tokenId}
            onChange={(event) => setTokenId(event.target.value)}
            width="95%"
            scale={2/3}
          >
            Token ID
          </Input>
          <Spacer h={1} />
          <Button icon={<Search />} loading={isLoading} disabled={isLoading} scale={2/3} onClick={() => loadNft()}>Find</Button>
        </Card>
        <Spacer h={1.5} />
        {isLoading && <Loading height="40px" spaceRatio={1.5}>Loading</Loading>}
        {nft && <Nft nft={nft} onSelect={() => onSelect(nft)} />}
      </Drawer.Content>
    </>
  );
}

export default SelectNft;
