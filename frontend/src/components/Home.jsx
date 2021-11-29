import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBg from "./AnimatedBg";
import "./Home.css";

import ChevronDown from "./../images/icons/chevron-down.svg";
import CustomButton from "./customButton";

export default function Home() {
  const help_texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sagittis sapien. Vestibulum aliquam bibendum arcu, in pulvinar lectus interdum non. Etiam ullamcorper mauris ac orci volutpat, vitae viverra lectus accumsan. Duis ut mi tincidunt, varius ante nec, scelerisque erat. Vestibulum ut imperdiet erat, eu tincidunt velit. Nunc laoreet consectetur dui, vel laoreet velit bibendum ac. Suspendisse imperdiet erat vitae ipsum ultrices, ut lobortis libero pulvinar. Nullam vitae augue laoreet, eleifend augue in, iaculis mi. Suspendisse volutpat nibh eu augue pulvinar, lobortis tempor neque vehicula. Nam urna nunc, sagittis in dui vitae, tincidunt luctus nunc. Vivamus non arcu eget est condimentum sollicitudin at nec turpis. Donec sapien arcu, sagittis non nisl non, vestibulum laoreet sem. Sed interdum porttitor turpis, ut accumsan augue. Nunc consectetur libero urna, euismod sollicitudin ipsum mollis eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sagittis sapien. Vestibulum aliquam bibendum arcu, in pulvinar lectus interdum non. Etiam ullamcorper mauris ac orci volutpat, vitae viverra lectus accumsan. Duis ut mi tincidunt, varius ante nec, scelerisque erat. Vestibulum ut imperdiet erat, eu tincidunt velit. Nunc laoreet consectetur dui, vel laoreet velit bibendum ac. Suspendisse imperdiet erat vitae ipsum ultrices, ut lobortis libero pulvinar. Nullam vitae augue laoreet, eleifend augue in, iaculis mi. Suspendisse volutpat nibh eu augue pulvinar, lobortis tempor neque vehicula. Nam urna nunc, sagittis in dui vitae, tincidunt luctus nunc. Vivamus non arcu eget est condimentum sollicitudin at nec turpis. Donec sapien arcu, sagittis non nisl non, vestibulum laoreet sem. Sed interdum porttitor turpis, ut accumsan augue. Nunc consectetur libero urna, euismod sollicitudin ipsum mollis eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sagittis sapien. Vestibulum aliquam bibendum arcu, in pulvinar lectus interdum non. Etiam ullamcorper mauris ac orci volutpat, vitae viverra lectus accumsan. Duis ut mi tincidunt, varius ante nec, scelerisque erat. Vestibulum ut imperdiet erat, eu tincidunt velit. Nunc laoreet consectetur dui, vel laoreet velit bibendum ac. Suspendisse imperdiet erat vitae ipsum ultrices, ut lobortis libero pulvinar. Nullam vitae augue laoreet, eleifend augue in, iaculis mi. Suspendisse volutpat nibh eu augue pulvinar, lobortis tempor neque vehicula. Nam urna nunc, sagittis in dui vitae, tincidunt luctus nunc. Vivamus non arcu eget est condimentum sollicitudin at nec turpis. Donec sapien arcu, sagittis non nisl non, vestibulum laoreet sem. Sed interdum porttitor turpis, ut accumsan augue. Nunc consectetur libero urna, euismod sollicitudin ipsum mollis eget.",
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
          <img src={ChevronDown} alt="" />
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
