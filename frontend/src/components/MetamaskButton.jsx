import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import metamaskLogo from "../images/logos/metamask.svg";
import { injected } from "../connectors";
import { connectContracts } from "web3integration";

const MetamaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const { active, activate, deactivate, library, account } = useWeb3React();

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      console.log("Metamask detected");
      try {
        // Request account access if needed
        // await window.ethereum.enable();
        // Acccounts now exposed
        // return web3;
        activate(injected, (error) => {
          console.log(error);
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
