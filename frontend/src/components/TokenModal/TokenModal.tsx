import React from "react";
import { Box, Divider, ListItem, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  CloseButton,
  HeadContainer,
  ListContainer,
  ListItemBalanceTypo,
  ListItemBody1Typo,
  ListItemBody2Typo,
  ModalContentBox,
  SearchInput,
  TitleTypography,
  TokeButtonTypo,
  TokenButton,
  TokenButtonsWrapper,
  TokenList,
  TokenListButton,
} from "../../styles/components/tokenModal";
import { Token } from "config/types";
import { useUserData } from "state/user/hooks";
import { getAddress } from "utils/addressHelpers";
import { getBalanceNumber } from "utils/formatBalance";

interface ModalProps {
  open: boolean;
  activeToken: string;
  handleClose: () => void;
  handleChange: (address: string) => void;
}

const TokenModal: React.FC<ModalProps> = (props) => {
  const { open, activeToken, handleClose, handleChange } = props;
  const { tokens } = useUserData();

  const [keyword, setKeyword] = React.useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setKeyword(e.target.value);
  };

  const onClose = () => {
    setKeyword("");
    handleClose();
  };

  const onClick = (t: Token) => {
    setKeyword("");
    handleChange(getAddress(t.address));
  };

  // const allTokens = React.useMemo(() => {
  //   return tokens.filter(
  //     (token) =>
  //       token.name.toLowerCase().includes(keyword.toLowerCase()) ||
  //       token.symbol.toLowerCase().includes(keyword.toLowerCase())
  //   );
  // }, [keyword]);

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContentBox>
        <HeadContainer>
          <TitleTypography>Select a token</TitleTypography>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </HeadContainer>

        <Box sx={{ padding: "0 20px 20px" }}>
          {/* <SearchInput
            fullWidth
            placeholder="Search name or paste address"
            onChange={onChange}
          /> */}
          {/* <TokenButtonsWrapper>
            {favTokens.map((token, index) => (
              <TokenButton
                key={index}
                variant='outlined'
                onClick={() => onClick({
                  unit: token.unit,
                  img: token.img,
                  name: token.name
                })}
                className={(token.unit === unit) ? 'active' : ''}
              >
                <img src={token.img} alt="TOKEN" width={24} height={24} />
                <TokeButtonTypo>{token.unit}</TokeButtonTypo>
              </TokenButton>
            ))}
          </TokenButtonsWrapper> */}
        </Box>

        <Divider sx={{ borderColor: "rgb(64, 68, 79)" }} />
        <ListContainer>
          <TokenList>
            {tokens.length > 0 &&
              tokens.map((token, index) => (
                <ListItem key={index} disableGutters sx={{ padding: "6px 0" }}>
                  <TokenListButton
                    onClick={() => onClick(token)}
                    disabled={
                      getAddress(token.address) === activeToken ? true : false
                    }
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      style={{ width: "100%" }}
                    >
                      <img
                        src={`/tokens/${getAddress(token.address)}.png`}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <Box
                        pl={2}
                        display="flex"
                        flexDirection="column"
                        style={{ flex: "1" }}
                      >
                        <ListItemBody1Typo>{token.symbol}</ListItemBody1Typo>
                        <ListItemBody2Typo>{token.name}</ListItemBody2Typo>
                      </Box>
                      {token.balance && !token.balance.isNaN() && (
                        <ListItemBalanceTypo>
                          {getBalanceNumber(
                            token.balance,
                            token.decimals
                          ).toLocaleString("en-US", {
                            maximumFractionDigits: 4,
                          })}
                        </ListItemBalanceTypo>
                      )}
                    </Box>
                  </TokenListButton>
                </ListItem>
              ))}
            {tokens.length === 0 && (
              <ListItemBody2Typo textAlign="center" pt={2}>
                No token found
              </ListItemBody2Typo>
            )}
          </TokenList>
        </ListContainer>
      </ModalContentBox>
    </Modal>
  );
};

export default TokenModal;
