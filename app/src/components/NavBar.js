import React from 'react';
import { Typography } from '@mui/material';
import { AppBar, Toolbar, IconButton, Typeography, Button, Menu, MenuItem } from '@mui/material'
// https://github.com/jcoreio/material-ui-popup-state
import {
   usePopupState,
   bindTrigger,
   bindMenu,
} from 'material-ui-popup-state/hooks'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { EthereumContext } from '../providers/EthereumContext';

function NavBar() {
   const { ethereumProvider, connectWallet } = React.useContext(EthereumContext);
   const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

   return (
      <AppBar positioin="static" color='primary'>
         <Toolbar variant='regular'>
            <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>NFT Memoirs</Typography>
         </Toolbar>
      </AppBar>
   );
}

export default NavBar;