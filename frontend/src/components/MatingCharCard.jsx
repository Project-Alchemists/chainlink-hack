import React from "react";
import adultBoy from "../images/adult boy.svg";
import adultGirl from "../images/adult girl.svg";
import Hunger from "./hungerbar";
import "./MatingCharCard.css";

export default function MatingCharCard(props) {
  return (
    <div
      className="mating-char-item"
      onClick={() => {
        if (props.deselectFunc) {
          props.deselectFunc(props.gender);
        } else {
          props.selectFunc(props.name);
        }
      }}
    >
      <img
        src={props.gender === "male" ? adultBoy : adultGirl}
        alt="boy"
        height="100px"
      />
      <h4 className="MatingCharCard-name">{props.name}</h4>
      <Hunger width={120} height={10} percent={props.percent} />
      <div></div>
    </div>
  );
}
