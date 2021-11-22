import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const helpFunc = () => {
    navigate("/help");
  };
  const startFunc = () => {
    navigate("/character");
  };
  return (
    <div>
      <div className="home-bar">
        <h4 className="help-btn" onClick={helpFunc}>
          Help
        </h4>
      </div>
      <div className="home-mid">
        <div className="home-title">Chainlink</div>
        <div className="home-start" onClick={startFunc}>
          Start
        </div>
      </div>
    </div>
  );
}
