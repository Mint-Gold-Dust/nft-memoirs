const ALCHEMY_API_KEY = 'nU_fp0kvyy39d8R5f-09hVfX8ykj3SzD';
const ALCHEMY_BASE_URL = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  contentType: 'application/json',
};

const getNft = (contract, tokenId) =>
  fetch(
    `${ALCHEMY_BASE_URL}/getNFTMetadata?${contract ? `&contractAddress=${contract}` : ''}${
      tokenId ? `&tokenId=${tokenId}` : ''
    }`,
    requestOptions,
  ).then((response) => response.json());

const getNfts = (owner, contract, pageKey) =>
  fetch(
    `${ALCHEMY_BASE_URL}/getNFTs?withMetadata=true${owner ? `&owner=${owner}` : ''}${
      contract ? `&contractAddresses[]=${contract}` : ''
    }${pageKey ? `&pageKey=${pageKey}` : ''}`,
    requestOptions,
  ).then((response) => response.json());

export { getNft, getNfts };
