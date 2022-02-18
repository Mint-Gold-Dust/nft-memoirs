import React from 'react';
import { AutoComplete, Card, Display, Link,  Page as BasePage, Spacer, Text } from '@geist-ui/core';
import Search from '@geist-ui/icons/search';

const memoirs = [{
  title: 'Awesome NFT memoir, writen in Latin',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
}, {
  title: 'Awesome NFT memoir, writen in Latin',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
}];

function Page() {

  return (
    <BasePage width="800px" padding={0}>
      <Display
        title="nft-memoirs"
        caption={
          <>
            Welcome to <Text span b>nft-memoirs</Text>, start sharing!
          </>
        }
        shadow
      >
        <Text padding={3}>
          <Text h2>Awesome NFT memoir, writen in Latin</Text>
          <Text p font="1.3rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac.
            Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non.
            Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla.
            Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
          </Text>
          Created at 2021-01-01 <br />
          Created by <Link href={`https://etherscan.io/address/${'0x247F9095DD018479EC2ca823DC2450708DD41558'}`}>0x247...41558</Link>
        </Text>
      </Display>

      <AutoComplete icon={<Search />} scale={3/2} clearable placeholder="Search here" width="100%">
        <AutoComplete.Searching>
          Loading results ...
        </AutoComplete.Searching>
      </AutoComplete>

      {
        memoirs.map((memoir) => (
          <>
            <Card shadow hoverable>
              <Text h4 my={0}>{memoir.title}</Text>
              <Text>{memoir.content}</Text>
            </Card>
            <Spacer h={0.5}/>
          </>
        ))
      }

    </BasePage>
  );
}

export default Page;
