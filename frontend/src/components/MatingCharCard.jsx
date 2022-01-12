import React, { useEffect, useState } from "react";
import adultBoy from "images/adult_boy.svg";
import adultGirl from "images/adult_girl.svg";
import Hunger from "./hungerbar";
import fheart from "images/icons/heart-solid.svg";
import eheart from "images/icons/heart-regular.svg";
import "./MatingCharCard.css";
import axios from "axios";

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

  const [manImage, setManImage] = useState(null);

  useEffect(() => {
    axios.get(`https://ipfs.io/ipfs/${props.cid}`).then((res) => {
      let _manImg = String(res.data);
      _manImg = _manImg.substring(
        _manImg.indexOf("xlink:href") + 12,
        _manImg.length - 11
      );
      console.log("svg data: ", _manImg);
      setManImage(_manImg);
    });
  }, []);

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
      <img src={manImage} alt="boy" height="90px" />
      <h4 className="MatingCharCard-name">{props.name}</h4>
      <Hunger width={125} height={10} percent={props.percent} />
      <div className="MatingCharCard-health">
        {full}
        {empty}
      </div>
    </div>
  );
}
