import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Character from "./components/Character";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/help" element={<Instructions />} />
				<Route path="/character" element={<Character />} />
			</Routes>
		</Router>
	);
}

export default App;
