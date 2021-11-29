import React, { useEffect, useState } from "react";
import CharDisp from "./charDisplay";
import "./charList.css";
import rationimage from "../images/icons/ration.svg";
import { useNavigate } from "react-router";
import CustomButton from "./customButton";
import { balanceOf, getPlayerInfo } from "web3integration";
import { useWeb3React } from "@web3-react/core";
import { tokenOfOwnerByIndex } from "../web3integration";

const CharList = (props) => {
  const navigate = useNavigate();

  const [ration, setRation] = useState(0);
  const [rbutton, setRbutton] = useState([]);

  const [length, setLength] = useState(0);

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

  useEffect(() => {
    console.log(length);
    for (let index = 0; index < length; index++) {
      tokenOfOwnerByIndex(account, index).then((val) => {
        getPlayerInfo(parseInt(val.toString()));
      });
    }
  }, [length]);

  const toMating = () => {
    navigate("/mating");
  };

  const handleRation = () => {
    console.log("buy ration wallet"); // ration wallet integration
    setRation(10);
  };

  const [chars, setChars] = useState([
    {
      token: "ONE",
      gender: "Male",
      age: 35,
      percent: 40,
      hearts: 2,
      foodLast: 6,
      name: "rex",
    },
  ]);

  const { account } = useWeb3React();

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
          />
        ))}
      </div>
      <div className="sidebar-main">
        <div className="ration-main">
          <div className="ration-icon">
            <img
              src={rationimage}
              className="icon-image"
              alt=""
              onClick={async () => {
                await balanceOf(account).then((val) => setLength(val));
              }}
            ></img>
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
