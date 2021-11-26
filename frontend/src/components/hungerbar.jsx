import React from "react";
import "./hungerbar.css";

const Hunger = props => {
	let col = "hsl(" + props.percent + ", 100%, 40%)";

<<<<<<< Updated upstream
	const stylein = {
		width: props.percent + "%",
		height: "100%",
		backgroundColor: col,
	};
=======
    let col = "hsl("+ props.percent +", 100%, 50%)"
>>>>>>> Stashed changes

	const styleout = {
		width: props.width,
		height: props.height,
	};

	return (
		<div className="hunger-main" style={styleout}>
			<div className="hunger-progress" style={stylein}></div>
		</div>
	);
};

export default Hunger;
