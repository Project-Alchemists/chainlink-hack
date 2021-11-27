import React, { useEffect, useState } from "react";
import CharDisp from "./charDisplay";
import "./charList.css";
import rationimage from "../images/icons/ration.svg";
import { useNavigate } from "react-router";
import CustomButton from "./customButton";

const CharList = props => {
	const navigate = useNavigate();

	const [ration, setRation] = useState(0);
	const [rbutton, setRbutton] = useState([]);

  useEffect(() => {
    setRbutton(
      ration > 0
        ? []
        : [
            <CustomButton onClick={handleRation} text="buy ration" height={10}/>,
          ]
    );
  }, [ration]); // render button based on ration amount

  const toMating = () => {
    navigate("/mating");
  };

  const handleRation = () => {
    console.log("buy ration wallet"); // ration wallet integration
    setRation(10);
  };

  const [chars, setChars] = useState([
    {
      token: "ETH",
      gender: "Male",
      age: 35,
      percent: 40,
      hearts: 2,
      foodLast: 6,
      name: "test01",
    },
    {
      token: "BUSD",
      gender: "Female",
      age: 22,
      percent: 70,
      hearts: 1,
      foodLast: 6,
      name: "test02",
    },
    {
      token: "DAI",
      gender: "Male",
      age: 40,
      percent: 100,
      hearts: 4,
      name: "test03",
    },
    {
      token: "ONE",
      gender: "Female",
      age: 26,
      percent: 30,
      hearts: 0,
      foodLast: 6,
      name: "test04",
    },
    {
      token: "SUSHI",
      gender: "Male",
      age: 32,
      percent: 80,
      hearts: 3,
      name: "test05",
    },
    {
      token: "LINK",
      gender: "Female",
      age: 31,
      percent: 55,
      hearts: 2,
      foodLast: 6,
      name: "test06",
    },
    {
      token: "USDC",
      gender: "Female",
      age: 47,
      percent: 75,
      hearts: 3,
      name: "test07",
    },
    {
      token: "USDT",
      gender: "Male",
      age: 32,
      percent: 76,
      hearts: 1,
      name: "test08",
    },
    {
      token: "WBTC",
      gender: "Female",
      age: 54,
      percent: 70,
      hearts: 4,
      foodLast: 6,
      name: "test09",
    },
    {
      token: "DSLA",
      gender: "Female",
      age: 45,
      percent: 10,
      hearts: 2,
      name: "test10",
    },
  ]);

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
            <img src={rationimage} className="icon-image" alt=""></img>
          </div>
          <div className="ration-amount">{ration}</div>
          <div className="ration-buy">{rbutton}</div>
        </div>
        <div className="mating-main-button">
          <CustomButton onClick={toMating} text="go to mating" />
        </div>
      </div>
    </div>
  );
};

export default CharList;
