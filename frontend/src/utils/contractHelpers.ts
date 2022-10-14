import { ethers } from "ethers";
import multicallAbi from "config/abi/multicall.json";
import erc20Abi from "config/abi/erc20.json";
import gatewayAbi from "config/abi/gateway.json";
import { simpleRpcProvider } from "utils/providers";
import { getMulticallAddress, getGatewayAddress } from "./addressHelpers";

export function getContract(
  abi,
  address,
  signer?: ethers.Signer | ethers.providers.Provider
) {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
}

export const getMulticallContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(multicallAbi, getMulticallAddress(), signer);
};

export const getGatewayContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(gatewayAbi, getGatewayAddress(), signer);
};

export const getERC20Contract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(erc20Abi, address, signer);
};
