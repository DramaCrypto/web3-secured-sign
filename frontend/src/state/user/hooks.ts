import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import tokensConfig from "config/tokens";
import {
  DeserializedHistoryProps,
  DeserializedTokenProps,
  DeserializedUserState,
  SerializedHistoryProps,
  SerializedTokenProps,
  State,
} from "state/types";
import { useAppDispatch } from "state";
import useRefresh from "hooks/useRefresh";
import {
  fetchDepositHistoryAsync,
  fetchGamesDataAsync,
  fetchTokensDataAsync,
} from ".";
import { getAddress } from "utils/addressHelpers";
import { BIG_ZERO } from "utils/bigNumber";

const deserializeToken = (
  token: SerializedTokenProps
): DeserializedTokenProps => {
  return {
    ...token,
    balance: new BigNumber(token.balance),
    allowance: new BigNumber(token.allowance),
  };
};

const deserializeHistory = (
  history: SerializedHistoryProps
): DeserializedHistoryProps => {
  const { payAmount, ...rest } = history;
  return {
    ...rest,
    payAmount: new BigNumber(payAmount),
  };
};

export const useUserData = (): DeserializedUserState => {
  const userState = useSelector((state: State) => state.user);
  const { tokens, history, activeToken, ...rest } = userState;

  return {
    ...rest,
    activeToken: deserializeToken(activeToken),
    tokens: tokens.map(deserializeToken),
    history: history.map(deserializeHistory),
  };
};

export const useActiveToken = (): DeserializedTokenProps => {
  const userState = useSelector((state: State) => state.user);
  const { activeToken } = userState;
  return deserializeToken(activeToken);
};

export const useTokenFromAddress = (
  address: string
): DeserializedTokenProps => {
  const { account } = useWeb3React();
  const { tokens } = useUserData();

  return useMemo(() => {
    return tokens.find((token) => getAddress(token.address) === address);
  }, [address, account]);
};

export const usePollUserData = () => {
  const dispatch = useAppDispatch();
  const { fastRefresh, slowRefresh } = useRefresh();
  const { account } = useWeb3React();

  useEffect(() => {
    if (account) {
      dispatch(fetchGamesDataAsync({ account }));
      dispatch(fetchDepositHistoryAsync({ account }));
    }
  }, [slowRefresh, account, dispatch]);

  useEffect(() => {
    if (account) {
      const ids = tokensConfig.map((token) => token.id);
      dispatch(fetchTokensDataAsync({ account, ids }));
    }
  }, [slowRefresh, account, dispatch]);
};

export const useEthBalance = () => {
  const userState = useSelector((state: State) => state.user);
  const { tokens } = userState;
  return new BigNumber(tokens[0].balance);
};
