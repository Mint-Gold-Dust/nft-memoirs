import React, { useContext } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { useViewerConnection } from '@self.id/react';
import { EthereumAuthProvider } from '@self.id/web';
import { EthereumContext } from './providers/EthereumContext';
import WideCardList from './components/WideCardList/Index';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloudOffIcon from '@mui/icons-material/CloudOff';

function App() {
  const [connection, connect, disconnect] = useViewerConnection();
  const { ethereumProvider, isConnected, connectWallet } = useContext(EthereumContext);
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


  return (
    <div className="App">
      <div className='Memoir-header'>
        <WideCardList />
      </div>
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
    </div>
  );
}

export default App;
