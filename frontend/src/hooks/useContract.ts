import { useMemo } from "react";
import {
  getMulticallContract,
  getGatewayContract,
  getERC20Contract,
} from "utils/contractHelpers";
import useActiveWeb3React from "./useActiveWeb3React";

export const useMulticallContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getMulticallContract(library.getSigner()), [library]);
};

export const useGatewayContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getGatewayContract(library.getSigner()), [library]);
};

export const useERC20Contract = (address: string) => {
  const { library } = useActiveWeb3React();
  return useMemo(
    () => getERC20Contract(address, library.getSigner()),
    [library, address]
  );
};
