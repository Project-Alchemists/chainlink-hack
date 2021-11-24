import React from "react";
import "./charDisplay.css";
import boyImage from "../../src/images/adult boy.svg";
import girlImage from "../../src/images/adult girl.svg";
import busd from "../../src/images/originals/busd.svg";
import dai from "../../src/images/originals/dai.svg";
import eth from "../../src/images/originals/ethereum.svg";
import har from "../../src/images/originals/harmony.svg";
import chain from "../../src/images/originals/chainlink.svg";
import sushi from "../../src/images/originals/sushi.svg";
import usdc from "../../src/images/originals/usdc.svg";
import usdt from "../../src/images/originals/usdt.svg";
import wbtc from "../../src/images/originals/wbtc.svg";
import dsla from "../../src/images/originals/dsla.svg";
import Hunger from "./hungerbar";

const CharDisp = (props) => {
  let image = props.gender === "Male" ? boyImage : girlImage;

  let token;

  switch (props.token) {
    case "BUSD":
      token = busd;
      break;

    case "DAI":
      token = dai;
      break;

    case "DSLA":
      token = dsla;
      break;

    case "ETH":
      token = eth;
      break;

    case "LINK":
      token = chain;
      break;

    case "ONE":
      token = har;
      break;

    case "SUSHI":
      token = sushi;
      break;

    case "USDC":
      token = usdc;
      break;

    case "USDT":
      token = usdt;
      break;

    case "WBTC":
      token = wbtc;
      break;

    default:
      break;
  }

  return (
    <div className="chardisp-main">
      <div className="chardisp-img">
        <img src={image} alt="" className="list-image"></img>
      </div>
      <div className="chardisp-token">
        <div className="list-token-contain">
          <img src={token} alt="" className="list-token"></img>
        </div>
        <div className="list-token-name">{props.token}</div>
      </div>
      <div className="chardisp-name">{props.name}</div>
      <div className="chardisp-age">{props.age}</div>
      <div className="chardisp-gender">{props.gender}</div>
      <div className="chardisp-health">health</div>
      <div className="chardisp-hospital">ambulance</div>
      <div className="chardisp-helstat">health stat</div>
      <div className="chardisp-hunger">
        <Hunger width={200} height={30} percent={props.percent} />
        <div className="hunger-percent">{props.percent}%</div>
      </div>
      <div className="chardisp-hunstat">hunger stat</div>
      <div className="chardisp-feed">feed</div>
    </div>
  );
};

export default CharDisp;
