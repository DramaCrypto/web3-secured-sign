import { useCallback } from "react";
import BigNumber from 'bignumber.js'
import gatewayAbi from "config/abi/gateway.json";
import multicall from "utils/multicall";
import { useERC20Contract, useGatewayContract } from "hooks/useContract";
import { getGatewayAddress } from "utils/addressHelpers";

const useGatewayConversion = () => {
  const gatewayAddress = getGatewayAddress();
  const onViewConversion = useCallback(async (token: string, amount: string) => {
    const calls = [
      {
        address: gatewayAddress,
        name: "viewConversion",
        params: [token, amount],
      }
    ];

    const [conversionData] = await multicall(gatewayAbi, calls);
    return new BigNumber(conversionData.gameCoinAmount_._hex).toJSON()
  }, [gatewayAddress]);

  return { onViewConversion };
};

export default useGatewayConversion;
