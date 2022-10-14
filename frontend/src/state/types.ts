import BigNumber from "bignumber.js";
import { GameConfig, Token } from "config/types";

export interface GameProps extends GameConfig {
  score?: SerializedBigNumber;
}

export interface SerializedHistoryProps {
  timestamp: number;
  payToken: Token;
  payAmount: SerializedBigNumber;
  coinAmount: SerializedBigNumber;
}

export interface DeserializedHistoryProps {
  timestamp: number;
  payToken: Token;
  payAmount: BigNumber;
  coinAmount: SerializedBigNumber;
}

export interface SerializedTokenProps extends Token {
  balance?: SerializedBigNumber;
  allowance?: SerializedBigNumber;
}

export interface DeserializedTokenProps extends Token {
  balance?: BigNumber;
  allowance?: BigNumber;
}

export interface SerializedUserState {
  games: GameProps[];
  activeToken: SerializedTokenProps;
  tokens: SerializedTokenProps[];
  history: SerializedHistoryProps[];
  coinBalance?: SerializedBigNumber;
}

export interface DeserializedUserState {
  games: GameProps[];
  activeToken: DeserializedTokenProps;
  tokens: DeserializedTokenProps[];
  history: DeserializedHistoryProps[];
  coinBalance?: SerializedBigNumber;
}

export interface State {
  user: SerializedUserState;
}
