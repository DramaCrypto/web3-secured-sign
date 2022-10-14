import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ConnectorLocalStorageKey, ConnectorNames } from "config";
import useAuth from "hooks/useAuth";
import WalletItem from "./WalletItem";
import {
  CloseButton,
  HeadContainer,
  ModalContentBox,
  NetworkContainer,
  TitleTypography,
} from "../../styles/components/connectModal";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConnectModal: React.FC<ModalProps> = (props) => {
  const { open, handleClose } = props;
  const { login } = useAuth();

  const handleConnect = (connectorId: ConnectorNames) => {
    login(connectorId);
    localStorage.setItem(ConnectorLocalStorageKey, connectorId);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContentBox>
        <HeadContainer>
          <TitleTypography>Connect to a wallet</TitleTypography>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
        </HeadContainer>
        <NetworkContainer>
          <WalletItem
            image="/metamask.svg"
            title="Metamask"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <WalletItem
            image="/trustwallet.svg"
            title="TrustWallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <WalletItem
            image="/walletconnect.svg"
            title="WalletConnect"
            handleClick={() => handleConnect(ConnectorNames.WalletConnect)}
          />
          <WalletItem
            image="/coinbase.png"
            title="Coinbase Wallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <WalletItem
            image="/safepal.svg"
            title="SafePal Wallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <WalletItem
            image="/paypal.png"
            title="TokenPocket"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <WalletItem
            image="/math.png"
            title="Math Wallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
        </NetworkContainer>
      </ModalContentBox>
    </Modal>
  );
};

export default ConnectModal;
