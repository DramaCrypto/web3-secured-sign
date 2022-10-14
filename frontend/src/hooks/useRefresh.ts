import { useContext } from "react";
import { RefreshContext } from "utils/RefreshContext";

const useRefresh = () => {
  const { base, fast, slow } = useContext(RefreshContext);
  return { baseRefresh: base, fastRefresh: fast, slowRefresh: slow };
};

export default useRefresh;
