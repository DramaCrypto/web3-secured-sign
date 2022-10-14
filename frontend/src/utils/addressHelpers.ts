import addresses from "config/contracts";
import { Address } from "config/types";
import { chainId } from "./web3React";

export const getAddress = (address: Address): string => {
  return address[chainId];
};

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall);
};

export const getGatewayAddress = () => {
  return getAddress(addresses.gateway);
}
