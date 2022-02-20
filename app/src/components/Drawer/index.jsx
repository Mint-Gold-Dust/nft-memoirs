import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Divider,
  Drawer as BaseDrawer,
  Grid,
  Text,
} from '@geist-ui/core';
import SelectNft from './SelectNft';
import FindNft from './FindNft';

function Drawer({ onClose, onSelect, isDrawerOpen }) {
  const [scene, setScene] = useState('menu');

  useEffect(() => {
    if(isDrawerOpen) {
      setScene('menu');
    }
  }, [isDrawerOpen]);

  const renderScene = () => {
    switch(scene) {
      case 'select':
        return (
          <SelectNft onSelect={onSelect}/>
        );
      case 'find':
        return (
          <FindNft onSelect={onSelect}/>
        );
      case 'menu':
      default:
        return (
          <BaseDrawer.Content width="380px">
            <Grid.Container direction="column" justify="space-around" gap={1.5} alignContent="center">
              <Grid>
                <Card>
                  <Text h4 my={0}>Find by contract and id</Text>
                  <Text>Find an NFT by it's contract address and unique token identifier.</Text>
                  <Button scale={.7} width="100%" onClick={() => setScene('find')}>Find NFT</Button>
                </Card>
              </Grid>
              <Divider />
              <Grid>
                <Card>
                  <Text h4 my={0}>Find by owner</Text>
                  <Text>Find an NFT by it's owners address and filter by it's contract address.</Text>
                  <Button scale={.7} width="100%" onClick={() => setScene('select')}>Select NFT</Button>
                </Card>
              </Grid>
            </Grid.Container>
          </BaseDrawer.Content>
        );
    }
  }

  return (
    <BaseDrawer visible={isDrawerOpen} onClose={onClose} placement="right">
      <BaseDrawer.Title>Select your NFT</BaseDrawer.Title>
      { renderScene() }
    </BaseDrawer>
  );
}

export default Drawer;
