import { useCallback } from "react";
import { ethers } from "ethers";
import { useGatewayContract } from "hooks/useContract";
import { getAddress, getGatewayAddress } from "utils/addressHelpers";
import { Token } from "config/types";
import { getDecimalAmount } from "utils/formatBalance";
import BigNumber from "bignumber.js";

const useDepositGateway = (token: Token) => {
  const gatewayContract = useGatewayContract();

  const handleDeposit = useCallback(
    async (amount: string) => {
      const tx = await gatewayContract.deposit(
        getAddress(token.address),
        getDecimalAmount(new BigNumber(amount), token.decimals).toFixed(),
        { value: token.isNative ? ethers.utils.parseEther(amount) : "0" }
      );
      const receipt = await tx.wait();
      return receipt.status;
    },
    [token, gatewayContract]
  );

  return { onDeposit: handleDeposit };
};

export default useDepositGateway;
