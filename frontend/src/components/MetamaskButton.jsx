import React, { useState } from "react";
import Web3 from "web3";
import metamaskLogo from "../images/logos/metamask.svg";

const MetamaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        return web3;
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <button onClick={connectWallet} className="metaMask-btn">
        <img src={metamaskLogo} height={30} alt="metamask logo" />
        <span className="metaMask-btn-txt">Connect with Metamask</span>
      </button>
    </>
  );
};

export default MetamaskButton;
