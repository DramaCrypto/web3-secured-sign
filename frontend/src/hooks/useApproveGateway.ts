import { useCallback } from "react";
import { ethers } from "ethers";
import { useCallWithGasPrice } from "hooks/useCallWithGasPrice";
import { useERC20Contract } from "hooks/useContract";
import { getGatewayAddress } from "utils/addressHelpers";
import { BIG_MAX } from "utils/bigNumber";
import { calculateGasMargin } from "utils";

const useApproveGateway = (tokenAddress: string) => {
  const tokenContract = useERC20Contract(tokenAddress);
  const gatewayAddress = getGatewayAddress();
  const { callWithGasPrice } = useCallWithGasPrice();

  const handleApprove = useCallback(async () => {
    const estimatedGas = await tokenContract.estimateGas.approve(
      gatewayAddress,
      ethers.constants.MaxUint256
    );
    const tx = await tokenContract.approve(
      gatewayAddress,
      ethers.constants.MaxUint256,
      { gasLimit: calculateGasMargin(estimatedGas) }
    );
    const receipt = await tx.wait();
    return receipt.status;
  }, [tokenContract, gatewayAddress, callWithGasPrice]);

  return { onApprove: handleApprove };
};

export default useApproveGateway;
