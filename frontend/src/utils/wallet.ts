// Set of helper functions to facilitate wallet setup

import { BLOCK_EXPLORER_URLS, RPC_URLS } from "config";
import { chainId } from "./web3React";

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      return true;
    } catch (err) {
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Ethereum Mainnet",
              nativeCurrency: {
                name: "ETH",
                symbol: "eth",
                decimals: 18,
              },
              rpcUrls: [RPC_URLS[chainId]],
              blockExplorerUrls: [`${BLOCK_EXPLORER_URLS[chainId]}/`],
            },
          ],
        });
        return true;
      } catch (err1) {
        console.error("Failed to setup the network in Metamask:", err1);
        return false;
      }
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};
