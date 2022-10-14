import { useCallback } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { toast } from "react-hot-toast";
import { ConnectorLocalStorageKey, ConnectorNames, JwtTokenKey } from "config";
import { connectorsByName } from "utils/web3React";
import { setupNetwork } from "utils/wallet";

const useAuth = () => {
  const { account, library, chainId, activate, deactivate } = useWeb3React();

  const login = useCallback(
    (connectorId: ConnectorNames) => {
      const connector = connectorsByName[connectorId];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(ConnectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError
              // || error instanceof NoBscProviderError
            ) {
              toast.error("No provider was found");
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = null;
              }
              toast.error("Please authorize to access your account");
            } else {
              toast.error(error.message);
            }
          }
        });
      } else {
        toast.error("Unable to find connector");
      }
    },
    [activate, library, chainId]
  );

  const logout = useCallback(() => {
    deactivate();
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem("walletconnect")) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
    window.localStorage.removeItem(ConnectorLocalStorageKey);
    // window.localStorage.removeItem(`${JwtTokenKey}-${account}`);
  }, [deactivate, chainId, account]);

  return { login, logout };
};

export default useAuth;
