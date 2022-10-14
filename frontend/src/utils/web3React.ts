import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { ethers } from "ethers";
import { ConnectorNames, RPC_URLS } from "config";

const POLLING_INTERVAL = 12000;
export const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10) || 5;

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
});

const networkConnector = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: chainId,
});

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.NetworkConnect]: networkConnector,
};

export const getLibrary = (provider): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

