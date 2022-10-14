import styled from "styled-components";

export const ConnectedAccount = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
  color: #b58c4c;
  margin-top: 12px;
`;

export const WalletBalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
  margin-top: 16px;
  color: #fff;

  & > div:first-child {
    font-size: 16px;
    font-weight: 400;
  }

  & > div:last-child {
    font-size: 20px;
    font-weight: 500;
  }
`

export const DisconnectWallet = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
  color: #bf845a;
  margin-top: 12px;
  cursor: pointer;
`;

export const IconButton = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WalletFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  gap: 24px;
`;
