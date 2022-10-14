import React from "react";
import { useWeb3React } from "@web3-react/core";
import { BLOCK_EXPLORER_URLS } from "config";
import { useEthBalance } from "state/user/hooks";
import CopyAddress from "./CopyAddress";
import * as Element from "./styles";
import { getBalanceNumber } from "utils/formatBalance";

const WalletInfo = ({ handleDisconnect }) => {
  const { account, chainId } = useWeb3React();
  const ethBalance = useEthBalance();

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <CopyAddress account={account} />
          <Element.WalletBalanceRow>
            <div>Your Balance: </div>
            <div>
              {getBalanceNumber(ethBalance)
                .toLocaleString("en-US", { maximumFractionDigits: 6 })}{" "}
              ETH
            </div>
          </Element.WalletBalanceRow>
          <Element.WalletFooter>
            <Element.ConnectedAccount
              href={`${BLOCK_EXPLORER_URLS[chainId]}/address/${account}`}
              target="_blank"
            >
              View on Explorer
            </Element.ConnectedAccount>
            <Element.DisconnectWallet onClick={handleDisconnect}>
              Disconnect Wallet
            </Element.DisconnectWallet>
          </Element.WalletFooter>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WalletInfo;
