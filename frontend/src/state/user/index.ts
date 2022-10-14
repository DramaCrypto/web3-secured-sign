/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import gamesConfig from "config/games";
import tokensConfig from "config/tokens";
import { Token } from "config/types";
import {
  GameProps,
  SerializedHistoryProps,
  SerializedTokenProps,
  SerializedUserState,
} from "state/types";
import { getAddress } from "utils/addressHelpers";
import { fetchDepositHistory, fetchGamesData } from "./fetchGamesData";
import fetchTokensData, { fetchTokenData } from "./fetchTokensData";

export const initialState: SerializedUserState = {
  games: gamesConfig,
  tokens: tokensConfig,
  history: [],
  activeToken: tokensConfig[0],
};

export const fetchGamesDataAsync = createAsyncThunk<
  { coinBalance: SerializedBigNumber; games: GameProps[] },
  { account: string }
>("user/fetchGamesDataAsync", async ({ account }) => {
  return await fetchGamesData(account);
});

export const fetchDepositHistoryAsync = createAsyncThunk<
  SerializedHistoryProps[],
  { account: string }
>("user/fetchDepositHistoryAsync", async ({ account }) => {
  return await fetchDepositHistory(account);
});

export const fetchTokensDataAsync = createAsyncThunk<
  SerializedTokenProps[],
  { account: string; ids: number[] }
>("user/fetchTokensDataAsync", async ({ account, ids }) => {
  const dataToFetch = tokensConfig.filter((token) => ids.includes(token.id));
  const tokensData = await fetchTokensData(account, dataToFetch);

  return tokensData;
});

export const fetchActiveTokenDataAsync = createAsyncThunk<
  SerializedTokenProps,
  { account: string; tokenAddress: string }
>("user/fetchActiveTokenDataAsync", async ({ account, tokenAddress }) => {
  const token = tokensConfig.find(
    (t) => getAddress(t.address) === tokenAddress
  );
  return token;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesDataAsync.fulfilled, (state, action) => {
        state.coinBalance = action.payload.coinBalance;
        state.games = action.payload.games;
      })
      .addCase(fetchTokensDataAsync.fulfilled, (state, action) => {
        state.tokens = state.tokens.map((token) => {
          const updatedToken = action.payload.find((t) => t.id === token.id);
          if (updatedToken) {
            return { ...token, ...updatedToken };
          }
          return { ...token };
        });
        state.activeToken = state.tokens.find(
          (token) =>
            getAddress(token.address) === getAddress(state.activeToken.address)
        );
      })
      .addCase(fetchDepositHistoryAsync.fulfilled, (state, action) => {
        state.history = action.payload;
      })
      .addCase(fetchActiveTokenDataAsync.fulfilled, (state, action) => {
        state.activeToken = state.tokens.find(
          (token) =>
            getAddress(token.address) === getAddress(action.payload.address)
        );
      });
  },
});

export default userSlice.reducer;
