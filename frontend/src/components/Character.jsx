import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Character.css";
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

export default function Character() {
  const navigate = useNavigate();
  const goBackFunc = () => {
    navigate("/");
  };
  const nextFunc = () => {};

  const [g_flipped, setG_flipped] = useState(false);
  const [b_flipped, setB_flipped] = useState(false);

  const [selectedChar, setSelected] = useState([false, false]);
  const [crypto, setCrypto] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCrypto = (input) => {
    var temp = [];

    for (let i = 0; i < crypto.length; i++) {
      temp[i] = false;
    }

    crypto[input] ? (temp[input] = false) : (temp[input] = true);

    setCrypto(temp);
  };

  return (
    <div className="main-screen">
      <div className="player-select">
        <div
          className="player-select-box"
          id={selectedChar[0] ? "selected" : "un"}
          onClick={() => {
            selectedChar[0]
              ? setSelected([false, false])
              : setSelected([true, false]);
          }}
        >
          <div className="button-div">
            <button
              className="flip-button"
              onClick={() => setG_flipped(g_flipped ? false : true)}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB10lEQVRIie2VO2tUURRG19Y4xPf7EQkZBB9ok0AKLSw0Pn6BgiAKFrER1M7CzkLQn2H+gFoJTiEWQiKKmkJEG0dBQQsl6iRqXBa5QnK49yYzE6xmlfvs/X2bve89Bzp06LBIRDPJahewDagAa7PwV+An8DEifrdtrK4BjgH7gUFgN9ADLC0omQY+AK+AJ8AocD8iJhbUiXpEvatO2j4N9Y46VGZYVR8uglkRD9S+OaNW+4EasKmgr8/AM+AtUAemgC/Z2TqgG+gDqsAAsLFEZygixlEr6nhOh6PqRXXngnY0d3q71EvqWI7uC3UZ6vHk4LV6qES0u8kmDqtvEo+jqKeT4Kl5hIbV62rR151Xk3qcQR1Igt/Ua+rqApHzWV5N3TyP4Ur1ivo98Rj8l3AvZxc/1NvqOXWPWkmMVd+pB3IM96kj6kSObm124lb1aU7SbH45s/+XSXxKvVAwlZTn6pa0y1XqjUyoFUbUFQXGDfWmurxsL9vVq+b/YmV8Mht7ZvxHfaReVntSn9JHQu0FDgL9wF6gF9gBbEhSx4CTEVHP6qrAdES8L9Nvipwx3iodYQFL2uhhEhiOiLMR0Wi2uKtF0zpwIiIet1jfPM5cOOv/m2GHDs3yF/wYSZ0r/6l/AAAAAElFTkSuQmCC"
                alt=""
              ></img>
            </button>
          </div>

          <div
            className={
              g_flipped ? "player-select-image flipped" : "player-select-image"
            }
          >
            <div className="flip-card-front">
              <img
                src={girlImage}
                className="girl-image image-animate"
                alt="female"
              ></img>
            </div>
            <div className="flip-card-back">
              <div className="back-title">More Info</div>
              <div className="back-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                doloribus unde voluptatibus repellendus explicabo delectus illum
                reiciendis quaerat? Labore, molestiae.
              </div>
            </div>
          </div>
          <div className="player-select-gender">
            <svg
              className="svg-text"
              id="female"
              width="123"
              height="29"
              viewBox="0 0 123 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.724 2.08801V1.58801H62.224H58.732H58.408L58.2756 1.88376L49.516 21.456L40.7564 1.88376L40.624 1.58801H40.3H36.772H36.272V2.08801V27V27.5H36.772H40.048H40.548V27V10.7327L47.9075 27.204L48.0398 27.5H48.364H50.668H50.9926L51.1247 27.2036L58.448 10.7739V27V27.5H58.948H62.224H62.724V27V2.08801Z"
                stroke="white"
              />
              <path
                d="M120.92 13.088V12.588H120.42H111.776V5.2H121.5H122V4.7V2V1.5H121.5H108H107.5V2V27.128V27.628H108H121.5H122V27.128V24.428V23.928H121.5H111.776V16.288H120.42H120.92V15.788V13.088Z"
                stroke="white"
              />
              <path
                d="M32.42 12.96V12.46H31.92H23.276V5.07201H33H33.5V4.57201V1.87201V1.37201H33H19.5H19V1.87201V27V27.5H19.5H33H33.5V27V24.3V23.8H33H23.276V16.16H31.92H32.42V15.66V12.96Z"
                stroke="white"
              />
              <path
                d="M16.456 1.90799V1.40799H15.956H1.772H1.272V1.90799V27V27.5H1.772H5.048H5.548V27V16.196H13.904H14.404V15.696V13.032V12.532H13.904H5.548V5.07199H15.956H16.456V4.57199V1.90799Z"
                stroke="white"
              />
              <path
                d="M69.456 27.448H69.807L69.9263 27.1179L71.823 21.868H82.065L83.9618 27.1179L84.081 27.448H84.432H87.888H88.6009L88.3581 26.7777L79.3221 1.82973L79.2027 1.5H78.852H75.072H74.7218L74.6021 1.82913L65.5301 26.7771L65.2861 27.448H66H69.456ZM73.118 18.204L76.944 7.51562L80.77 18.204H73.118Z"
                stroke="white"
              />
              <path
                d="M104.56 24.428V23.928H104.06H95.776V2V1.5H95.276H92H91.5V2V27.092V27.592H92H104.06H104.56V27.092V24.428Z"
                stroke="white"
              />
            </svg>
          </div>
        </div>
        <div
          className="player-select-box"
          id={selectedChar[1] ? "selected" : "un"}
          onClick={() => {
            selectedChar[1]
              ? setSelected([false, false])
              : setSelected([false, true]);
          }}
        >
          <div className="button-div">
            <button
              className="flip-button"
              onClick={() => setB_flipped(b_flipped ? false : true)}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB10lEQVRIie2VO2tUURRG19Y4xPf7EQkZBB9ok0AKLSw0Pn6BgiAKFrER1M7CzkLQn2H+gFoJTiEWQiKKmkJEG0dBQQsl6iRqXBa5QnK49yYzE6xmlfvs/X2bve89Bzp06LBIRDPJahewDagAa7PwV+An8DEifrdtrK4BjgH7gUFgN9ADLC0omQY+AK+AJ8AocD8iJhbUiXpEvatO2j4N9Y46VGZYVR8uglkRD9S+OaNW+4EasKmgr8/AM+AtUAemgC/Z2TqgG+gDqsAAsLFEZygixlEr6nhOh6PqRXXngnY0d3q71EvqWI7uC3UZ6vHk4LV6qES0u8kmDqtvEo+jqKeT4Kl5hIbV62rR151Xk3qcQR1Igt/Ua+rqApHzWV5N3TyP4Ur1ivo98Rj8l3AvZxc/1NvqOXWPWkmMVd+pB3IM96kj6kSObm124lb1aU7SbH45s/+XSXxKvVAwlZTn6pa0y1XqjUyoFUbUFQXGDfWmurxsL9vVq+b/YmV8Mht7ZvxHfaReVntSn9JHQu0FDgL9wF6gF9gBbEhSx4CTEVHP6qrAdES8L9Nvipwx3iodYQFL2uhhEhiOiLMR0Wi2uKtF0zpwIiIet1jfPM5cOOv/m2GHDs3yF/wYSZ0r/6l/AAAAAElFTkSuQmCC"
                alt=""
              ></img>
            </button>
          </div>
          <div
            className={
              b_flipped ? "player-select-image flipped" : "player-select-image"
            }
          >
            <div className="flip-card-front">
              <img
                src={boyImage}
                className="boy-image image-animate"
                alt="male"
              ></img>
            </div>
            <div className="flip-card-back">
              <div className="back-title">More Info</div>
              <div className="back-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                doloribus unde voluptatibus repellendus explicabo delectus illum
                reiciendis quaerat? Labore, molestiae.
              </div>
            </div>
          </div>
          <div className="player-select-gender">
            <svg
              className="svg-text"
              id="male"
              width="88"
              height="28"
              viewBox="0 0 88 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.724 1.08801V0.588013H27.224H23.732H23.408L23.2756 0.88376L14.516 20.456L5.75638 0.88376L5.62402 0.588013H5.3H1.772H1.272V1.08801V26V26.5H1.772H5.048H5.548V26V9.73273L12.9075 26.204L13.0398 26.5H13.364H15.668H15.9926L16.1247 26.2036L23.448 9.77388V26V26.5H23.948H27.224H27.724V26V1.08801Z"
                stroke="white"
              />
              <path
                d="M85.92 12.088V11.588H85.42H76.776V4.2H86.5H87V3.7V1V0.5H86.5H73H72.5V1V26.128V26.628H73H86.5H87V26.128V23.428V22.928H86.5H76.776V15.288H85.42H85.92V14.788V12.088Z"
                stroke="white"
              />
              <path
                d="M34.456 26.448H34.807L34.9263 26.1179L36.823 20.868H47.065L48.9618 26.1179L49.081 26.448H49.432H52.888H53.6009L53.3581 25.7777L44.3221 0.829728L44.2027 0.5H43.852H40.072H39.7218L39.6021 0.829128L30.5301 25.7771L30.2861 26.448H31H34.456ZM38.118 17.204L41.944 6.51562L45.77 17.204H38.118Z"
                stroke="white"
              />
              <path
                d="M69.56 23.428V22.928H69.06H60.776V1V0.5H60.276H57H56.5V1V26.092V26.592H57H69.06H69.56V26.092V23.428Z"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="crypto-main">
        <div className="crypto-select">
          <button
            onClick={() => handleCrypto(0)}
            className={
              crypto[0] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-1"
          >
            <div className="crypto-logo">
              <img
                src={busd}
                className="crypto-logo-image"
                alt=""
                id="img-busd"
              ></img>
            </div>
            <div className="crypto-name" id="name-busd">
              BUSD
            </div>
          </button>
          <button
            onClick={() => handleCrypto(1)}
            className={
              crypto[1] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-2"
          >
            <div className="crypto-logo">
              <img
                src={dai}
                className="crypto-logo-image"
                alt=""
                id="img-dai"
              ></img>
            </div>
            <div className="crypto-name" id="name-dai">
              DAI
            </div>
          </button>
          <button
            onClick={() => handleCrypto(2)}
            className={
              crypto[2] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-3"
          >
            <div className="crypto-logo">
              <img
                src={dsla}
                className="crypto-logo-image"
                alt=""
                id="img-dsla"
              ></img>
            </div>
            <div className="crypto-name" id="name-dsla">
              DSLA
            </div>
          </button>
          <button
            onClick={() => handleCrypto(3)}
            className={
              crypto[3] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-4"
          >
            <div className="crypto-logo">
              <img
                src={eth}
                className="crypto-logo-image"
                alt=""
                id="img-eth"
              ></img>
            </div>
            <div className="crypto-name" id="name-eth">
              ETH
            </div>
          </button>
          <button
            onClick={() => handleCrypto(4)}
            className={
              crypto[4] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-5"
          >
            <div className="crypto-logo">
              <img
                src={chain}
                className="crypto-logo-image"
                alt=""
                id="img-link"
              ></img>
            </div>
            <div className="crypto-name" id="name-link">
              LINK
            </div>
          </button>
          <button
            onClick={() => handleCrypto(5)}
            className={
              crypto[5] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-6"
          >
            <div className="crypto-logo">
              <img
                src={har}
                className="crypto-logo-image"
                alt=""
                id="img-one"
              ></img>
            </div>
            <div className="crypto-name" id="name-one">
              ONE
            </div>
          </button>
          <button
            onClick={() => handleCrypto(6)}
            className={
              crypto[6] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-7"
          >
            <div className="crypto-logo">
              <img
                src={sushi}
                className="crypto-logo-image"
                alt=""
                id="img-sushi"
              ></img>
            </div>
            <div className="crypto-name" id="name-sushi">
              SUSHI
            </div>
          </button>
          <button
            onClick={() => handleCrypto(7)}
            className={
              crypto[7] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-8"
          >
            <div className="crypto-logo">
              <img
                src={usdc}
                className="crypto-logo-image"
                alt=""
                id="img-usdc"
              ></img>
            </div>
            <div className="crypto-name" id="name-usdc">
              USDC
            </div>
          </button>
          <button
            onClick={() => handleCrypto(8)}
            className={
              crypto[8] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-9"
          >
            <div className="crypto-logo">
              <img
                src={usdt}
                className="crypto-logo-image"
                alt=""
                id="img-usdt"
              ></img>
            </div>
            <div className="crypto-name" id="name-usdt">
              USDT
            </div>
          </button>
          <button
            onClick={() => handleCrypto(9)}
            className={
              crypto[9] ? "crypto-button button-press" : "crypto-button"
            }
            id="grid-10"
          >
            <div className="crypto-logo">
              <img
                src={wbtc}
                className="crypto-logo-image"
                alt=""
                id="img-wbtc"
              ></img>
            </div>
            <div className="crypto-name" id="name-wbtc">
              WBTC
            </div>
          </button>
        </div>
      </div>

      <div className="btn-grp">
        <div className="back-btn" onClick={goBackFunc}>
          Go Back
        </div>
        <div className="back-btn" onClick={nextFunc}>
          Next
        </div>
      </div>
    </div>
  );
}
