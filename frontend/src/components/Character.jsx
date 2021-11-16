import React from "react";
import { useNavigate } from "react-router-dom";

export default function Character() {
  const navigate = useNavigate();
  const goBackFunc = () => {
    navigate("/");
  };
  const nextFunc = () => {};
  return (
    <>
      <div className="player-select">
        <div className="player-select-box"></div>
        <div className="player-select-box"></div>
      </div>
      <div className="btn-grp">
        <div className="back-btn" onClick={goBackFunc}>
          Go Back
        </div>
        <div className="back-btn" onClick={nextFunc}>
          Next
        </div>
      </div>
    </>
  );
}
