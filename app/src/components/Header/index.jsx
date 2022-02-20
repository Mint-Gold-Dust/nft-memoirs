import React, { useContext } from 'react';
import { Button, Grid, Link, Spacer } from '@geist-ui/core';
import GitHub from '@geist-ui/icons/github';
import { CeramicContext } from '../../providers/CeramicContext';

function Header() {
  const { authenticate, deauthenticate, isAuthenticated, isLoading } = useContext(CeramicContext);

  return (
    <>
      <Spacer h={.7} />
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Link href="https://github.com/Mint-Gold-Dust/nft-memoirs">
            <Button iconRight={<GitHub />} auto scale={2/3} px={0.6} />
          </Link>
        </Grid>
        <Grid>
          <Button loading={isLoading} disabled={isAuthenticated} auto scale={2/3} px={0.6} onClick={authenticate} >{isAuthenticated ? 'Wallet Connected' : 'Connect Wallet'}</Button>
        </Grid>
        {
          isAuthenticated &&
          <Grid>
            <Button loading={isLoading} auto scale={2/3} px={0.6} onClick={deauthenticate}>Disconnect / Deauthenticate</Button>
          </Grid>
        }
      </Grid.Container>
    </>
  );
};

export default Header;
