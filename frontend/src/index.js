import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MoralisProvider
        appId={process.env.REACT_APP_MORALIS_APP_ID}
        serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
      >
        <App />
      </MoralisProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
