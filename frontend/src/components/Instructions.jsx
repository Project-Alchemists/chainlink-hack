import React from "react";
import { useNavigate } from "react-router-dom";

export default function Instructions() {
	const navigate = useNavigate();
	const goBackFunc = () => {
		navigate("/");
	};
	return (
		<>
			<div className="instructions">
				<div className="instructions-content">
					<h2>Instructions</h2>
				</div>
			</div>
			<div className="back-btn" onClick={goBackFunc}>
				Go Back
			</div>
		</>
	);
}
