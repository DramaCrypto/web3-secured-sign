import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Box } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { ConnectButton, HeaderContainer } from "../../styles/components/header";
import ConnectModal from "../ConnectModal";
import WalletModal from "../WalletModal";
import { truncateWalletString } from "utils";

const Header = () => {
  const { account } = useWeb3React();

  const [connectModalOpened, openConnectModal] = React.useState(false);
  const handleOpenConnectModal = () => openConnectModal(true);
  const handleCloseConnectModal = () => openConnectModal(false);
  const [walletModalOpened, openWalletModal] = React.useState(false);
  const handleOpenWalletModal = () => openWalletModal(true);
  const handleCloseWalletModal = () => openWalletModal(false);

  return (
    <React.Fragment>
      <ConnectModal
        open={connectModalOpened}
        handleClose={handleCloseConnectModal}
      />
      <WalletModal
        open={walletModalOpened}
        handleClose={handleCloseWalletModal}
      />

      <HeaderContainer>
        <Box>
          <img src="./logo.png" alt="LOGO" width="120" />
        </Box>
        <Box>
          {account ? (
            <ConnectButton variant="contained" onClick={handleOpenWalletModal}>
              {truncateWalletString(account)}
            </ConnectButton>
          ) : (
            <ConnectButton variant="contained" onClick={handleOpenConnectModal}>
              Connect Wallet
              <PlayCircleFilledWhiteIcon sx={{ marginLeft: "4px" }} />
            </ConnectButton>
          )}
        </Box>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
