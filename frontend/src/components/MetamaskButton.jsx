import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import metamaskLogo from "../images/logos/metamask.svg";
import { injected } from "../connectors";
import { connectContracts } from "web3integration";
import { setupNetwork } from "setupNetwork";

const MetamaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const { active, activate, deactivate, library, account } = useWeb3React();

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        // await window.ethereum.enable();
        // Acccounts now exposed
        // return web3;
        activate(injected, async (error) => {
          console.log(error);
          const hasSetup = await setupNetwork(
            1666700000,
            "https://api.s0.b.hmny.io"
          );
          if (hasSetup) activate(injected);
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(async () => {
    if (!library) return;
    const signer = await library.getSigner(account);
    connectContracts(signer);
  }, [library]);

  return (
    <>
      <button
        onClick={() => {
          active ? deactivate() : connectWallet();
        }}
        className="metaMask-btn"
      >
        <img src={metamaskLogo} height={30} alt="metamask logo" />
        <span className="metaMask-btn-txt">
          {active ? "Connected" : "Connect wallet"}
        </span>
      </button>
    </>
  );
};

export default MetamaskButton;
