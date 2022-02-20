import React from 'react';
import { Button, Grid, Link, Spacer } from '@geist-ui/core';
import GitHub from '@geist-ui/icons/github';
// import Sun from '@geist-ui/icons/sun';
// import Moon from '@geist-ui/icons/moon';

function Header() {
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
          {/* <Button icon={<Sun />} auto scale={2/3} px={0.6}>Light</Button> */}
        </Grid>
      </Grid.Container>
    </>
  );
};


export default Header;
