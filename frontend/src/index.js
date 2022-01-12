import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { store } from "redux/store";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MoralisProvider
          appId={process.env.REACT_APP_MORALIS_APP_ID}
          serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
        >
          <App />
        </MoralisProvider>
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
