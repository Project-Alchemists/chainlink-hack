import React, { useState } from "react";
import Web3 from "web3";

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
				<button onClick={connectWallet}>Connect Metamask</button>
			</>
		
	);
};

export default MetamaskButton;
