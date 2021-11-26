import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBg from "./AnimatedBg";
import "./Home.css";

export default function Home() {
	const navigate = useNavigate();
	const helpFunc = () => {
		navigate("/help");
	};
	const startFunc = () => {
		navigate("/buycharacter");
	};
	return (
		<div>
			<AnimatedBg />
			{/* <div className="home-bar">
        

      </div> */}
			<div className="home-mid">
				<div className="home-title">Chainlink</div>
				<div className="home-start" onClick={startFunc}>
					Start
				</div>
			</div>
			<h4 className="help-btn" onClick={helpFunc}>
				Help
			</h4>
		</div>
	);
}
