import React, { useEffect, useState } from "react";
import "./Mating.css";
import MatingCharCard from "./MatingCharCard";
import fheart from "../images/icons/heart-solid.svg";
import { useNavigate } from "react-router-dom";
import CustomButton from "./customButton";
import { useWeb3React } from "@web3-react/core";
import {
  balanceOf,
  getPlayerInfo,
  mate,
  tokenOfOwnerByIndex,
  tokenUri,
} from "web3integration";
import { fetchCharacter } from "moralisIntegration";
import { useSelector } from "react-redux";

export default function Mating() {
  const navigate = useNavigate();
  const [length, setLength] = useState(0);
  const { account } = useWeb3React();
  const state = useSelector((state) => state);

  const [charList, setCharList] = useState([]);

  useEffect(async () => {
    await balanceOf(account).then((val) => {
      setLength(val);
      setCharList([]);
    });
  }, [account, state]);

  useEffect(() => {
    for (let index = 0; index < length; index++) {
      tokenOfOwnerByIndex(account, index).then(async (val) => {
        const info = await getPlayerInfo(parseInt(val.toString())).then(
          (info) => info
        );
        const name = await fetchCharacter(val.toString());
        const cid = await tokenUri(val.toString());
        setCharList((prev) => [
          ...prev,
          {
            name: name || val.toString(),
            gender: info.isMale ? "male" : "female",
            tokenId: val,
            cid,
          },
        ]);
      });
    }
  }, [length]);

  useEffect(() => {
    setMaleCharList(
      charList.filter((item) => {
        return item.gender === "male";
      })
    );
    setFemaleCharList(
      charList.filter((item) => {
        return item.gender === "female";
      })
    );
  }, [charList]);

  const [maleCharList, setMaleCharList] = useState(
    charList.filter((item) => {
      return item.gender === "male";
    })
  );
  const [femaleCharList, setFemaleCharList] = useState(
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
  const mateFunc = async () => {
    if ((!mateMale || !mateFemale) && !mateStatus) {
      alert("Choose mates!!");
      return;
    } else {
      setMateStatus(true);
      mate(mateMale.tokenId, mateFemale.tokenId);
      setMateMale();
      setMateFemale();
      setMateStatus(false);
    }
  };
  return (
    <div className="mating-container">
      <div className="mating-master">
        <div className="grid-mating-item mating-chars">
          <div className="grid-flex-parent">
            {maleCharList.map((item, index) => (
              <MatingCharCard
                key={index}
                gender="male"
                name={item.name}
                selectFunc={selectFunc}
                percent={100}
                hearts={3}
                cid={item.cid}
              />
            ))}
          </div>
        </div>
        <div className="grid-mating-item">
          {!mateStatus ? (
            <>
              <div className="mating-area">
                <div className="mating-final">
                  {mateMale && (
                    <MatingCharCard
                      name={mateMale.name}
                      gender={mateMale.gender}
                      deselectFunc={deselectFunc}
                      percent={100}
                      hearts={4}
                      cid={mateMale.cid}
                    />
                  )}
                </div>
                <div className="mating-final plus-sign">
                  <img
                    src={fheart}
                    alt=""
                    className="MatingCharCard-heart"
                  ></img>
                </div>
                <div className="mating-final">
                  {mateFemale && (
                    <MatingCharCard
                      name={mateFemale.name}
                      gender={mateFemale.gender}
                      deselectFunc={deselectFunc}
                      percent={100}
                      hearts={4}
                      cid={mateFemale.cid}
                    />
                  )}
                </div>
              </div>
              <div
                style={{ margin: "0px auto 0px auto", width: "fit-content" }}
              >
                <CustomButton onClick={mateFunc} text="mate" />
              </div>
            </>
          ) : (
            <>
              <div className="mating-product-container">
                <div className="mating-product">
                  <MatingCharCard
                    name="Aarti"
                    gender="female"
                    percent={100}
                    deselectFunc={() => {
                      navigate("/characterlist");
                    }} // on clicking product of mating
                    hearts={4}
                  />
                </div>
              </div>
              <div
                style={{ margin: "0px auto 0px auto", width: "fit-content" }}
              >
                <CustomButton onClick={mateFunc} text="mate again" />
              </div>
            </>
          )}
        </div>
        <div className="grid-mating-item mating-chars">
          <div className="grid-flex-parent">
            {femaleCharList.map((item, index) => (
              <MatingCharCard
                key={index}
                gender="female"
                name={item.name}
                selectFunc={selectFunc}
                percent={100}
                hearts={4}
                cid={item.cid}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
