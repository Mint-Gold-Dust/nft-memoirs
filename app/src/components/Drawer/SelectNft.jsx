import React, { useEffect, useState } from 'react';
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
import Filter from '@geist-ui/icons/filter';
import X from '@geist-ui/icons/x';

import { getNfts } from '../../services/alchemy';
import { trim, isAddress } from '../../utils/ethereumAddress';
import Nft from '../Nft';

function SelectNft({ onSelect }) {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('0/x');
  const [isEditingFilters, setIsEditingFilters] = useState(false);
  const [owner, setOwner] = useState('0x2828a451CAb819E30aBe523976569f2a8e6D6190');
  const [contract, setContract] = useState('');

  const allowLoadingNfts = (isAddress(owner) || owner === '') && (isAddress(contract) || contract === '') && owner !== contract;

  const loadNfts = (pageKey, previousPage = [], loadedCount = 0) => {
    setIsLoading(true);

    getNfts(owner, contract, pageKey)
      .then((result) => {
        if(result.pageKey) {
          setLoadingMessage(`${loadedCount}/${result.totalCount}`);
          loadNfts(result.pageKey, previousPage.concat(result.ownedNfts), loadedCount + 100);
        } else {
          setNfts(previousPage.concat(result.ownedNfts));
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    if(allowLoadingNfts)  {
      loadNfts();
    }
  }, [owner, contract]);

  const onToggle = () => {
    setIsEditingFilters(!isEditingFilters);
  };

  return (
    <>
      <Drawer.Subtitle>Find NFTs by owner and contract address.</Drawer.Subtitle>
      <Drawer.Content width="380px">
        <Grid.Container gap={.5} justify="center">
          {
            isAddress(owner) &&
              <Grid>
                <Tooltip text={owner} placement="topEnd" type="dark"><Tag type="secondary">Owner: {trim(owner)}</Tag></Tooltip>
              </Grid>
          }
          {
            isAddress(contract) &&
              <Grid>
                <Tooltip text={contract} placement="topEnd" type="dark"><Tag type="secondary">Contract: {trim(contract)}</Tag></Tooltip>
              </Grid>
          }
        </Grid.Container>
        <Spacer h={.7} />
        <Button width="100%" scale={.5} iconRight={isEditingFilters ? <X /> : <Filter />} onClick={onToggle}>
          Apply filters
        </Button>
        {
          isEditingFilters &&
          <>
            <Spacer h={0.5}/>
            <Card>
              <Input
                placeholder="0x0000000000000000000000000000000000000000"
                value={owner}
                onChange={(event) => setOwner(event.target.value)}
                width="95%"
                scale={2/3}
              >
               Owner address
              </Input>
              <Spacer h={1} />
              <Input
                placeholder="0x0000000000000000000000000000000000000000"
                value={contract}
                onChange={(event) => setContract(event.target.value)}
                width="95%"
                scale={2/3}
              >
               Contract address
              </Input>
            </Card>
          </>
        }
        {isLoading && <Loading spaceRatio={1.5}>Loading ({loadingMessage})</Loading>}
        <Spacer h={1.5} />
        {nfts.map((nft, index) => <Nft nft={nft} onSelect={() => onSelect(nft)} key={index} />)}
      </Drawer.Content>
    </>
  );
}

export default SelectNft;
