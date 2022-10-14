export const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  5: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  42: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  56: "https://bsc-dataseed.binance.org",
  97: "https://data-seed-prebsc-1-s1.binance.org:8545",
  250: "https://rpc.ftm.tools",
  137: "https://polygon-rpc.com",
};

export const BLOCK_EXPLORER_URLS = {
  1: 'https://etherscan.io/',
  3: 'https://ropsten.etherscan.io/',
  4: 'https://rinkeby.etherscan.io/',
  5: 'https://goerli.etherscan.io/',
  56: 'https://bscscan.com',
  97: 'https://testnet.bscscan.com',
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  NetworkConnect = "networkconnect",
}

export const ConnectorLocalStorageKey = "ASSIGNMENT-CONNECTOR-ID";

export const JwtTokenKey = "ASSIGNMENT-JWT-TOKEN";

export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
