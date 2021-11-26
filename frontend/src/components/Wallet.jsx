import React, { useState } from "react";
import adultBoy from "images/adult boy.svg";
import adultGirl from "images/adult girl.svg";
import Hunger from "./hungerbar";
import fheart from "images/icons/heart-solid.svg";
import eheart from "images/icons/heart-regular.svg";
import "./WalletCharCard.css";
import "./Wallet.css";

const CharacterCard = props => {
	let full, empty;

	try {
		full = Array(props.hearts).fill(
			<img src={fheart} alt="" className="walletCharCard-heart"></img>
		);
		empty = Array(4 - props.hearts).fill(
			<img src={eheart} alt="" className="walletCharCard-heart"></img>
		);
	} catch (error) {
		full = [];
		empty = Array(4).fill(
			<img src={eheart} alt="" className="walletCharCard-heart"></img>
		);
	}

	return (
		<div>
			<div className="wallet-char-item">
				<img
					src={props.gender === "male" ? adultBoy : adultGirl}
					alt="boy"
					height="90px"
				/>
				<h4 className="walletCharCard-name">{props.name}</h4>
				<Hunger width={125} height={10} percent={props.percent} />
				<div className="walletCharCard-health">
					{full}
					{empty}
				</div>
				<div className="walletCharCard-button">
					<button>Recieve Wage</button>
				</div>
			</div>
		</div>
	);
};

const Wallet = props => {
	const [charList, setCharList] = useState([
		{ name: "Sanskar", gender: "male" },
		{ name: "Krimshanu", gender: "male" },
		{ name: "Ritvij", gender: "male" },
		{ name: "Arihant", gender: "male" },
		{ name: "Shreya", gender: "female" },
		{ name: "Aditi", gender: "female" },
	]);

	return (
		<div>
			<div className="grid-item wallet-chars">
				{charList.map((item, index) => (
					<CharacterCard
						key={index}
						gender="male"
						name={item.name}
						percent={100}
						hearts={4}
					/>
				))}
			</div>
		</div>
	);
};

export default Wallet;
