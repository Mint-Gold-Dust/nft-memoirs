import React, { useContext, useEffect, useState} from 'react';
import { Button, Card, Display, Grid, Input, Image, Link, Page as BasePage, Spacer, Text, /* useToasts */ } from '@geist-ui/core';
import Search from '@geist-ui/icons/search';
import PlusSquare from '@geist-ui/icons/plusSquare';
import { CeramicContext } from '../../providers/CeramicContext';
import EditForm from '../EditForm';
import Header from '../Header';

const initMemoirs = [{
  title: 'Awesome NFT memoir, written in Latin',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
}, {
  title: 'Awesome NFT memoir, written in Latin',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
}];

function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [memoirs, setMemoirs] = useState(initMemoirs);
  const [searchedMemoirs, setSearchedMemoirs] = useState(memoirs);
  const { isLoading, isAuthenticated, authenticate } = useContext(CeramicContext);
  // const { setToast } = useToasts();

  const onToggle = (state) => {
    if(!isAuthenticated) {
      // setToast({
      //   text: 'Your wallet needs to be connected and authenticated to do that action.',
      //   delay: 2000,
      //   actions: [{
      //     name: 'Connect wallet',
      //     handler: authenticate,
      //   }],
      // });
      authenticate();
    } else {
      setIsEditing(state || !isEditing);
    }
  };

  const onSearch = (searchValue) => {
    if(searchValue !== '') {
      setSearchedMemoirs(memoirs.filter((memoir) => memoir.title.includes(searchValue) || memoir.content.includes(searchValue)));
    } else {
      setSearchedMemoirs(memoirs);
    }
  };

  useEffect(() => {
    setSearchedMemoirs(memoirs);
  }, [memoirs]);

  return (
    <BasePage width="800px" padding={0}>
      <BasePage.Header padding={0}>
        <Header />
      </BasePage.Header>
      <BasePage.Content padding={0}>
        <Display
          title="nft-memoirs"
          caption={
            <>
              Welcome to{' '}
              <Text span b>
                nft-memoirs
              </Text>
              , start sharing!
            </>
          }
          shadow
        >
          <Text padding={2}>
            <Text h2>Awesome NFT memoir, written in Latin</Text>
            <Text p font="1.3rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi
              tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea
              dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa.
              Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque mauris.
            </Text>
          </Text>
        </Display>

        {isEditing && (
          <>
            <EditForm
              onSubmit={(memoir) => {
                setMemoirs([memoir, ...memoirs]);
              }}
              onClose={() => onToggle(false)}
            />
            <Spacer h={1.2} />
          </>
        )}

        <Grid.Container justify="space-between">
          <Grid xs={18}>
            <Input icon={<Search />} scale={1.4} clearable placeholder="Search here" width="100%" onChange={(event) => onSearch(event.target.value)} />
          </Grid>
          <Grid xs={5}>
            <Button icon={<PlusSquare />} type="secondary" ghost auto scale={1.2} onClick={onToggle} loading={isLoading}>
              Create Memoir
            </Button>
          </Grid>
        </Grid.Container>
        <Spacer h={1.5} />
        {searchedMemoirs.map((memoir, index) => (
          <>
            <Card key={index} shadow hoverable>
              <Grid.Container gap={.7}>
                <Grid xs={5}>
                  <Image src={memoirs.nft}  width="120px" height="160px" />
                </Grid>
                <Grid xs={17}>
                  <Text>
                    <Text h4 my={0}>{memoir.title}</Text>
                    <Text>{memoir.content}</Text>
                  </Text>
                </Grid>
              </Grid.Container>
            </Card>
            <Spacer h={0.5} />
          </>
        ))}
      </BasePage.Content>
    </BasePage>
  );
}

export default Page;
