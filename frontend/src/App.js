import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "components/Home";
import Instructions from "components/Instructions";
import Character from "components/Character";
import CharList from "components/charList";
import Mating from "components/Mating";
import Wallet from "components/Wallet";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/help" element={<Instructions />} />
				<Route path="/buycharacter" element={<Character />} />
				<Route path="/characterlist" element={<CharList />} />
				<Route path="/mating" element={<Mating />} />
				<Route path="/wallet" element={<Wallet />} />
			</Routes>
		</Router>
	);
};

export default App;
