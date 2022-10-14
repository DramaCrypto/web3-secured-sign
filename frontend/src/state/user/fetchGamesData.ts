import { API_ENDPOINT } from "config";
import gamesConfig from "config/games";
import tokensConfig from "config/tokens";
import { getAddress } from "utils/addressHelpers";

export const fetchGamesData = async (account: string) => {
  if (account) {
    try {
      const response = await fetch(
        `${API_ENDPOINT}user/scores?account=${account.toLocaleLowerCase()}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      const { coinBalance, games } = result.data;
      return {
        coinBalance,
        games: gamesConfig.map((game) => ({
          ...game,
          score: games[game.dbSymbol] || "0",
        })),
      };
    } catch (err) {
      console.error(err);
    }
  } else {
    return {
      coinBalance: "0",
      games: gamesConfig.map((game) => ({ ...game, score: "0" })),
    };
  }
};

export const fetchDepositHistory = async (account: string) => {
  if (account) {
    try {
      const response = await fetch(
        `${API_ENDPOINT}user/history?account=${account.toLocaleLowerCase()}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();

      return result.data.map((history) => {
        const payToken = tokensConfig.find(
          (t) => getAddress(t.address).toLocaleLowerCase() === history.pay_token
        );
        return {
          timestamp: Number(history.block_timestamp),
          payToken,
          payAmount: history.token_amount,
          coinAmount: history.coin_amount,
        };
      });
    } catch (err) {
      console.error(err);
    }
  }
  return [];
};
