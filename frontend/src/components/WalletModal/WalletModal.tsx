import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useAuth from "hooks/useAuth";
import WalletInfo from "../WalletInfo";
import {
  CloseButton,
  HeadContainer,
  ModalContentBox,
  TitleTypography,
} from "../../styles/components/connectModal";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const WalletModal: React.FC<ModalProps> = (props) => {
  const { open, handleClose } = props;
  const { logout } = useAuth();

  const handleDisconnect = () => {
    logout();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContentBox>
        <HeadContainer>
          <TitleTypography>Your Wallet</TitleTypography>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
        </HeadContainer>
        <WalletInfo handleDisconnect={handleDisconnect} />
      </ModalContentBox>
    </Modal>
  );
};

export default WalletModal;
