const trim = (ethereumAddress) => {
  return ethereumAddress.slice(0, 6) + '...' + ethereumAddress.slice(-3);
};

const isAddress = (ethereumAddress) => {
  return /^0x[a-fA-F0-9]{40}$/.test(ethereumAddress);
}

export {
  trim,
  isAddress,
};
