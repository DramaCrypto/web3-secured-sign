import { RPC_URLS } from "config";
import { ethers } from "ethers";
import { chainId } from "./web3React";

export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(
  RPC_URLS[chainId]
);

export default null;
