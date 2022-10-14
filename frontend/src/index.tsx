import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import store from "state";
import { getLibrary } from "utils/web3React";
import { RefreshContextProvider } from "utils/RefreshContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <RefreshContextProvider>
          <App />
        </RefreshContextProvider>
      </Provider>
    </Web3ReactProvider>
  </React.StrictMode>
);

reportWebVitals();
