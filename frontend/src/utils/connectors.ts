import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { RPC_URLS } from "config";
import { chainId } from "./web3React";

export const networkConnector = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: chainId,
});

export const injectedConnector = new InjectedConnector({
  // supportedChainIds: [parseInt(currentNetwork)],
});

export const walletConnector = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
