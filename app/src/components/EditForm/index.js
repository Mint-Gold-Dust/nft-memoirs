import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Description,
  Grid,
  Input,
  Link,
  Spacer,
  Text,
  Textarea,
} from '@geist-ui/core';
import { createMemoirs } from '../../CeramicServices';

import Drawer from '../Drawer';

function EditForm({ onClose }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nft, setNft] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSelect = (nft) => {
    setIsDrawerOpen(false);
    setNft(nft);
  };

  const onSubmit = () => {
    setIsLoading(true);
    createMemoirs()
      .then(() => {
        setIsLoading(false);
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Card>
        <Card.Content padding={0}>
          <Grid.Container justify="space-between">
            <Grid padding={1} xs={19}>
              <Avatar scale={2} text="NFT" isSquare src={nft?.media?.[0]?.uri?.gateway}/>
              <Description px={.5} scale={1.4} title={nft?.title || ''} content={nft?.description ? (nft.description.length > 58 ? nft.description.slice(0, 55) + ' ...' : nft.description) : ''} />
            </Grid>
            <Grid padding={1} xs={5}>
              <Link mx="auto" width="100%" block href="#" onClick={() => setIsDrawerOpen(true)} disabled={isLoading}>
                <Text mx="auto">{ nft?.title ? 'Change NFT' : 'Pick your NFT'}</Text>
              </Link>
            </Grid>
          </Grid.Container>
          {/* <Spacer h={.5}/>
          <Text my={0} h5>Title</Text>
          <Spacer h={.3}/> */}
          <Input
            padding={1}
            paddingTop={0}
            placeholder="Memoir title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            width="100%"
            disabled={isLoading}
          >
            Title
          </Input>
          {/* <Spacer h={.5}/> */}
          {/* <Text my={0} h5>Content</Text> */}
          {/* <Spacer h={.3}/> */}
          <Textarea
            placeholder="Write an memoir for an NFT"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            width="100%"
            height="124px"
            disabled={isLoading}
          />
          <Spacer />
          <Grid.Container justify="space-between">
            <Grid padding={1}>
              <Button auto onClick={onClose}>Cancel</Button>
            </Grid>
            <Grid padding={1}>
              <Button loading={isLoading} disabled={isLoading} auto type="secondary" onClick={onSubmit} >Submit</Button>
            </Grid>
          </Grid.Container>
        </Card.Content>
      </Card>
      <Drawer onClose={() => setIsDrawerOpen(false)} onSelect={onSelect} isDrawerOpen={isDrawerOpen} />
    </>
  );
}

export default EditForm;
