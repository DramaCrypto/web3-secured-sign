import { useState, useEffect } from "react";
import useAuth from "hooks/useAuth";
import { ConnectorLocalStorageKey, ConnectorNames } from "config";

export function useEagerConnect() {
  const { login } = useAuth();

  useEffect(() => {
    let connectorId = window.localStorage.getItem(
      ConnectorLocalStorageKey
    ) as ConnectorNames;
    if (connectorId) {
      login(connectorId);
    }
  }, [login]); // intentionally only running on mount (make sure it's only mounted once :))
}
