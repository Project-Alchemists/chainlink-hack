import React from "react";
import adultBoy from "../images/adult boy.svg";
import adultGirl from "../images/adult girl.svg";
import Hunger from "./hungerbar";
import fheart from "../images/icons/heart-solid.svg";
import eheart from "../images/icons/heart-regular.svg";
import "./MatingCharCard.css";

export default function MatingCharCard(props) {
  let full, empty;

  try {
    full = Array(props.hearts).fill(
      <img src={fheart} alt="" className="MatingCharCard-heart"></img>
    );
    empty = Array(4 - props.hearts).fill(
      <img src={eheart} alt="" className="MatingCharCard-heart"></img>
    );
  } catch (error) {
    full = [];
    empty = Array(4).fill(
      <img src={eheart} alt="" className="MatingCharCard-heart"></img>
    );
  }
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
        height="90px"
      />
      <h4 className="MatingCharCard-name">{props.name}</h4>
      <Hunger width={125} height={10} percent={props.percent} />
      <div className="MatingCharCard-health">
        {full}
        {empty}
      </div>
    </div>
  );
}
