import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBg from "./AnimatedBg";
import "./Home.css";

import ChevronDown from "./../images/icons/chevron-down.svg";
import CustomButton from "./customButton";

export default function Home() {
  const help_texts = [
    "Welcome to NFTlyf! The objective is simple: Survive. Before starting, make sure to connect your metamask wallet... All done? Good! You start out by minting (buying) a character from a limited pool and linking it with a token of your choice. Be careful while choosing this token as your character will earn based on how this token behaves in the real world. Make sure to take care of your character! Feed it when it's hungry and take care of its health. After your characters grow up, they can collect their wages based on how the linked token has performed. Two adult characters of the opposite sex can mate, creating a baby NFT tethered to a random token, and expanding your NFTlyf family. So what are you wating for? Start your NFTlyf today!",
  ];

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
        <div className="home-title">NFTlyf</div>
        {/* <div className="home-start" onClick={startFunc}> */}
        <CustomButton
          text="Mint Token!"
          onClick={startFunc}
          height={20}
          width={200}
        />
        {/* </div> */}
      </div>

      <div className="help-section-indicator">
        <a href={"#help-section"}>
          <span>{"Help"}</span>
        </a>
      </div>
      <div className="help-section" id="help-section">
        {
          help_texts.map((txt) => (
            <div>{txt}</div>
          ))
          // [<div>{'sdfsdf'}</div>]
        }
      </div>
    </div>
  );
}
