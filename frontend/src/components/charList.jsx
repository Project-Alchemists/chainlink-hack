import React, { useEffect, useState } from "react";
import CharDisp from "./charDisplay";
import "./charList.css";
import rationimage from "../images/icons/ration.svg";
import { useNavigate } from "react-router";
import CustomButton from "./customButton";
import {
  balanceOf,
  getPlayerInfo,
  playerContract,
  tokenUri,
} from "web3integration";
import { useWeb3React } from "@web3-react/core";
import { tokenOfOwnerByIndex } from "../web3integration";
import { fetchCharacter } from "moralisIntegration";
import { useSelector } from "react-redux";

const CharList = (props) => {
  const navigate = useNavigate();

  const [ration, setRation] = useState(0);
  const [rbutton, setRbutton] = useState([]);

  const [length, setLength] = useState(0);

  const { account } = useWeb3React();

  const state = useSelector((state) => state);

  useEffect(() => {
    setRbutton(
      ration > 0
        ? []
        : [
            <CustomButton
              onClick={handleRation}
              text="buy ration"
              height={10}
            />,
          ]
    );
  }, [ration]); // render button based on ration amount

  const getTetheredToken = (index) => {
    switch (index) {
      case "0":
        return "BUSD";

      case "1":
        return "DAI";

      case "2":
        return "DSLA";

      case "3":
        return "ETH";

      case "4":
        return "LINK";

      case "5":
        return "ONE";

      case "6":
        return "SUSHI";

      case "7":
        return "USDC";

      case "8":
        return "USDT";

      case "9":
        return "WBTC";

      default:
        break;
    }
  };

  useEffect(() => {
    for (let index = 0; index < length; index++) {
      tokenOfOwnerByIndex(account, index).then(async (val) => {
        const info = await getPlayerInfo(parseInt(val.toString())).then(
          (info) => info
        );
        var foodDays =
          (Date.now() - parseInt(info.lastFed.toString()) * 1000) /
          (1000 * 60 * 60 * 24);
        console.log(val.toString());
        const name = await fetchCharacter(val.toString());
        const cid = await tokenUri(val.toString());
        setChars((prev) => [
          ...prev,
          {
            name: name || val.toString(),
            gender: info.isMale ? "Male" : "Female",
            token: getTetheredToken(info.tetheredToken.toString()),
            age: 35,
            percent: Math.round(((20 - foodDays) / 20) * 100).toFixed(0),
            hearts: 2,
            foodLast: 6,
            cid,
          },
        ]);
      });
    }
  }, [length]);

  useEffect(async () => {
    setChars([]);
    await balanceOf(account).then((val) => {
      setLength(val);
    });
  }, [account, state]);

  const toMating = () => {
    navigate("/mating");
  };

  const handleRation = () => {
    console.log("buy ration wallet"); // ration wallet integration
    setRation(10);
  };

  const [chars, setChars] = useState([]);

  return (
    <div className="list-main">
      <div className="list-child">
        {chars.map((item, index) => (
          <CharDisp
            key={index}
            uid={index}
            token={item.token}
            gender={item.gender}
            name={item.name}
            percent={item.percent}
            hearts={item.hearts}
            foodLast={item.foodLast}
            age={item.age}
            cid={item.cid}
          />
        ))}
      </div>
      <div className="sidebar-main">
        <div className="ration-main">
          <div className="ration-icon">
            <img src={rationimage} className="icon-image" alt=""></img>
          </div>
          <div className="ration-amount">{ration}</div>
          <div className="ration-buy">{rbutton}</div>
        </div>
        <div className="mating-main-button">
          <CustomButton onClick={toMating} text="mating" />
        </div>
      </div>
    </div>
  );
};

export default CharList;
