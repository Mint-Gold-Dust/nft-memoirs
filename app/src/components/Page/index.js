import React from 'react';
import { AutoComplete, Card, Display, Link, Page as BasePage, Spacer, Text } from '@geist-ui/core';
import Search from '@geist-ui/icons/search';

// Web3
import { useViewerConnection } from '@self.id/react';
import { EthereumAuthProvider } from '@self.id/web';
import { EthereumContext } from '../../providers/EthereumContext';

// MUI
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import {createMemoirs,createSchema, loadDoc} from './CeramicServices'

const memoirs = [{
  title: 'Awesome NFT memoir, writen in Latin',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
}, {
  title: 'Awesome NFT memoir, writen in Latin',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst. Id diam vel quam elementum pulvinar etiam non. Lobortis mattis aliquam faucibus purus in massa. Lorem sed risus ultricies tristique nulla. Dictum non consectetur a erat nam at. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.',
}];

function Page() {
  const [connection, connect, disconnect] = useViewerConnection();
  const { ethereumProvider, isConnected, connectWallet } = React.useContext(EthereumContext);
  const [actions, setActions] = React.useState([]);


  const authenticate = () => {
    if (isConnected) {
      ethereumProvider.request({ method: 'eth_requestAccounts' })
        .then((addresses) => new EthereumAuthProvider(ethereumProvider, addresses[0]))
        .then(connect);
    } else {
      connectWallet();
    }
  };

  React.useEffect(() => {
    if (isConnected == true) {
      authenticate()
    }
  }, [isConnected]);

  React.useEffect(() => {
    if (isConnected) {
      const a = [
        { icon: <AddBoxIcon />, name: 'Add Memoir', action: null },
        { icon: <AccountCircleIcon />, name: 'Connected', action: null },
        { icon: <CloudOffIcon />, name: 'Disconnect', action: disconnect() }
      ]
      setActions(a)
    } else {
      const a = [
        { icon: <AccountBalanceWalletIcon />, name: 'Connect Wallet', action: authenticate() }
      ]
      setActions(a)
    }
  }, [isConnected])

  async function readProfile() {
    const 

  }

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

      <AutoComplete icon={<Search />} scale={3 / 2} clearable placeholder="Search here" width="100%">
        <AutoComplete.Searching>
          Loading results ...
        </AutoComplete.Searching>
      </AutoComplete>

      <div>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.action}
            />
          ))}
        </SpeedDial>
      </div>

      {
        memoirs.map((memoir) => (
          <>
            <Card shadow hoverable>
              <Text h4 my={0}>{memoir.title}</Text>
              <Text>{memoir.content}</Text>
            </Card>
            <Spacer h={0.5} />
          </>
        ))
      }

    </BasePage>
  );
}

export default Page;
