import React, { useState } from "react";
import "./Mating.css";
import MatingCharCard from "./MatingCharCard";

export default function Mating() {
  const [charList, setCharList] = useState([
    { name: "Sanskar", gender: "male" },
    { name: "Krimshanu", gender: "male" },
    { name: "Shreya", gender: "female" },
    { name: "Aditi", gender: "female" },
  ]);
  const [maleCharList] = useState(
    charList.filter((item) => {
      return item.gender === "male";
    })
  );
  const [femaleCharList] = useState(
    charList.filter((item) => {
      return item.gender === "female";
    })
  );
  const [mateStatus, setMateStatus] = useState(false);
  const [mateMale, setMateMale] = useState();
  const [mateFemale, setMateFemale] = useState();
  const selectFunc = (name) => {
    const selectedItem = charList.filter((item) => {
      return item.name === name;
    })[0];
    if (selectedItem.gender === "male") {
      setMateMale(selectedItem);
    } else {
      setMateFemale(selectedItem);
    }
    console.log(selectedItem);
  };
  const deselectFunc = (gender) => {
    if (gender === "male") {
      setMateMale();
    } else if (gender === "female") {
      setMateFemale();
    }
  };
  const mateFunc = () => {
    if ((!mateMale || !mateFemale) && !mateStatus) {
      alert("Choose mates!!");
    } else {
      setMateMale();
      setMateFemale();
      setMateStatus((prev) => !prev);
    }
  };
  return (
    <div className="mating-container">
      <div className="mating-master">
        <div className="grid-item mating-chars">
          {maleCharList.map((item, index) => (
            <MatingCharCard
              key={index}
              gender="male"
              name={item.name}
              selectFunc={selectFunc}
              percent={100}
            />
          ))}
        </div>
        <div className="grid-item">
          {!mateStatus ? (
            <>
              <div className="mating-area">
                <div className="mating-final">
                  {mateMale && (
                    <MatingCharCard
                      name={mateMale.name}
                      gender={mateMale.gender}
                      deselectFunc={deselectFunc}
                    />
                  )}
                </div>
                <div className="mating-final plus-sign">+</div>
                <div className="mating-final">
                  {mateFemale && (
                    <MatingCharCard
                      name={mateFemale.name}
                      gender={mateFemale.gender}
                      deselectFunc={deselectFunc}
                    />
                  )}
                </div>
              </div>
              <button onClick={mateFunc}>
                <h1>MATE</h1>
              </button>
            </>
          ) : (
            <>
              <div className="mating-product">
                <MatingCharCard name="Kriya" gender="female" />
                <h4>🥳🥳🥳🥳</h4>
              </div>
              <button onClick={mateFunc}>
                <h1>MATE Again!</h1>
              </button>
            </>
          )}
        </div>
        <div className="grid-item mating-chars">
          {femaleCharList.map((item, index) => (
            <MatingCharCard
              key={index}
              gender="female"
              name={item.name}
              selectFunc={selectFunc}
              percent={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
