import React, { useEffect, useState } from "react";
import adultBoy from "images/adult_boy.svg";
import adultGirl from "images/adult_girl.svg";
import Hunger from "./hungerbar";
import fheart from "images/icons/heart-solid.svg";
import eheart from "images/icons/heart-regular.svg";
import "./WalletCharCard.css";
import "./Wallet.css";
import CustomButton from "./customButton";
import {
  balanceOf,
  getPlayerInfo,
  payWage,
  playerContract,
  tokenOfOwnerByIndex,
  tokenUri,
} from "web3integration";
import { useWeb3React } from "@web3-react/core";
import { fetchCharacter } from "moralisIntegration";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

const CharacterCard = (props) => {
  let full, empty;

  try {
    full = Array(props.hearts).fill(
      <img src={fheart} alt="" className="walletCharCard-heart"></img>
    );
    empty = Array(4 - props.hearts).fill(
      <img src={eheart} alt="" className="walletCharCard-heart"></img>
    );
  } catch (error) {
    full = [];
    empty = Array(4).fill(
      <img src={eheart} alt="" className="walletCharCard-heart"></img>
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
    <div>
      <div className="wallet-char-item">
        <img src={manImage} alt="boy" height="90px" />
        <h4 className="walletCharCard-name">{props.name}</h4>
        <Hunger width={125} height={10} percent={props.percent} />
        <div className="walletCharCard-health">
          {full}
          {empty}
        </div>
        <div className="walletCharCard-button">
          <CustomButton
            text="Receive Wage"
            onClick={() => {
              toast("Coming soon");
              // payWage(props.tokenId);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Wallet = (props) => {
  const [charList, setCharList] = useState([]);

  const { account } = useWeb3React();

  const [length, setLength] = useState(0);
  const state = useSelector((state) => state);

  useEffect(async () => {
    setCharList([]);
    await balanceOf(account).then((val) => setLength(val));
  }, [account, state]);

  useEffect(() => {
    for (let index = 0; index < length; index++) {
      tokenOfOwnerByIndex(account, index).then(async (val) => {
        const info = await getPlayerInfo(parseInt(val.toString())).then(
          (info) => info
        );
        var age =
          (Date.now() - parseInt(info.birthDate.toString()) * 1000) /
          (1000 * 60 * 60 * 24);
        if (age <= 60 || age >= 120) return;
        const name = await fetchCharacter(val.toString());
        const cid = await tokenUri(val.toString());
        setCharList((prev) => [
          ...prev,
          {
            name: name || val.toString(),
            gender: info.isMale ? "male" : "female",
            tokenId: parseInt(val.toString()),
            cid,
          },
        ]);
      });
    }
  }, [length]);

  return (
    <div>
      <div className="grid-item wallet-chars">
        {charList.map((item, index) => (
          <CharacterCard
            key={index}
            gender={item.gender}
            name={item.name}
            percent={100}
            hearts={3}
            tokenId={item.tokenId}
            cid={item.cid}
          />
        ))}
      </div>
    </div>
  );
};

export default Wallet;
