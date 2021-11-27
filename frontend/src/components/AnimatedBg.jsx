import React from "react";
import "./AnimatedBg.css";

export default function AnimatedBg() {
	return (
		<>
			<div className="background-container">
				<img
					id="globe-img"
					src="https://www.pinclipart.com/picdir/big/163-1635292_planets-clipart-animated-globe-3d-model-of-earth.png"
					alt=""
				/>
				<div class="stars"></div>
				<div class="twinkling"></div>
			</div>
		</>
	);
}
