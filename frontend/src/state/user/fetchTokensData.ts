import { SerializedTokenProps } from "state/types";
import multicall from "utils/multicall";
import erc20Abi from "config/abi/erc20.json";
import { getAddress, getGatewayAddress } from "utils/addressHelpers";
import { simpleRpcProvider } from "utils/providers";
import BigNumber from "bignumber.js";
import { Token } from "config/types";
import { BIG_MAX, BIG_ZERO } from "utils/bigNumber";

export const fetchTokenData = async (
  account: string,
  token: Token
): Promise<SerializedTokenProps> => {
  const { address, isNative } = token;
  const tokenAddress = getAddress(address);
  const gatewayAddress = getGatewayAddress();

  try {
    if (!account) {
      return {
        ...token,
        balance: null,
        allowance: null,
      };
    } else if (isNative) {
      const balance = await simpleRpcProvider.getBalance(account);
      return {
        ...token,
        balance: new BigNumber(balance.toString()).toJSON(),
        allowance: BIG_MAX.toJSON(),
      };
    } else {
      const calls = [
        {
          address: tokenAddress,
          name: "balanceOf",
          params: [account],
        },
        {
          address: tokenAddress,
          name: "allowance",
          params: [account, gatewayAddress],
        },
      ];

      const [[balance], [allowance]] = await multicall(erc20Abi, calls);

      return {
        ...token,
        balance: new BigNumber(balance._hex).toJSON(),
        allowance: new BigNumber(allowance._hex).toJSON(),
      };
    }
  } catch (err) {
    console.error(err);
  }
};

const fetchTokensData = async (account, tokens: Token[]) => {
  const batchData = await Promise.all(
    tokens.map(async (token) => {
      const singleData = await fetchTokenData(account, token);
      return singleData;
    })
  );
  return batchData;
};

export default fetchTokensData;
