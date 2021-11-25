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
import fheart from "../images/icons/heart-solid.svg";
import eheart from "../images/icons/heart-regular.svg";
import ambu from "../images/icons/ambulance-solid.svg";
import eat from "../images/icons/utensils-solid.svg";
import Hunger from "./hungerbar";

const CharDisp = (props) => {
  let image = props.gender === "Male" ? boyImage : girlImage;

  const danger = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACSklEQVRYhe3WX4jOaRQH8PPMjMVihzHjfzbutEMyIkNSLlyguKC4WyUbNyQ1ity6QVGmNHFBoYgbZW+kuJB2kVBEmDaJxbrYQuqzF/Oot7d3Zn7zzjuTiz311u93zvd8v99+Pee8T8T/UWVgGn7HVUyrlicNwsCViOjOrzNTSqur5apGfC3+wlj8iJdYM1ziP+AxNpXkNuMpRg6Hgb24iVSWv46OoRafgg9YWKE2H/9g+lAaOIPjfdQ7cXqoxNvxDs19YJrwFstrLV6H29hekktYivYy7A7cQX0tDfyGB2goyZ3EizyCXSX5etzDtlqJT8AbrCjJNeETfkJjfm4qqS/D35hYCwPHcLYsNxvvS97fY3YZ5hyODlb8F3zEz1UYmJHHct5gDFzDvgr5fg3k/H7cKF9aRcU34hlGDcLASDzBhoGKj8ZzrOulXshArq1HN8ZUqtf14qEjIp6llC4PyHmFSCldioiHEbGnUANm5oPX2gfm2xg2Ynz5GFbAz8mcs4oYuIhDBXBdeQl140QB/GFc6A+0Eq/R2K/THvwSLCmIHYdXWNUboAH38WtBwmYcyL9CGw9b8AgjKhV34Q/0djDL8XfztjuPPwv21OEWdpYXJuVRWlyQqAWfM2E9vqClYG+bnkvNlIh8K87/ZnUppS0FSVL0jNbNzNEeEa0pJQX7T0XE15TS1sCC7GhqkeYSkhk4kk/3gK5hmJy/+KJv+373QAhqEdiNaw0RMTciOtE2zB66I6I1YXP0rN6Ku3oI49+IODjMmt9h/AcCn6xeqYwCvgAAAABJRU5ErkJggg=="
  const ok = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACbElEQVRYheWXwWpTQRSG/7E1D5A2VWpdJBuJaBUUqysRbXRvfQ13oqu2SxfSVrMQN40vYRcSgxsXgmnVCL5AG0VQSQVLSPFzkXPJqPcm917vrgdCwsx//v/MnDNnJtJBN5fGCZiQNC3puCQkbUtqO+e+ZhjbP6IlYBnYIto2gSWglKVwAagCXU+oA7wHngEb9rvjzXeBR0Dhf8UvAZ+MtAesA9eAwyHYHDAP1AwL0AYuphW/BewZ0XPgRALfMlA33z1gIan4eeCnETwBxlMsYAy47wURbycs58G2P0gqHMK34qVjMo5D1dv2sQwCGPPSsTYKXLIK7iXJeYwgysbZBYrDgMsW6XpW4h53zbgXh4GCJjOfUmQKeAW8DJmrGHczynnCAJ2wcx5TvGUcr0Pmc8AP4BeQDyM4a85bKcQL9LshwEfgaATunWFmg7FD3nzg9DnC+Q5wF3B/jU9Jakg6LemDpMvOuVAOSW37ng4GkjSYe5LykmaA2845TPyFpFMmftU59yUB58CAM7Y9byPmrzNozVXgiJfzlgUzSiNI02zYZFCEu0AuRhDfE4oPL0IDbY46hnacgiAiCy7E74b5vBkGWjJQbQTZFeBxnJV7Pk+Ne2gjKjJoxeW45DHETwL7jGrFBn5okdbJ5jIaBxrGuRrHoUD/6gRYySCAVePaof+YjeV0juwfJHNJCRa8aq8nqQnLecMTv5l0AQHRnJeOHv0rtUJIn7BzXrFq3/e2/UIqcY94Eljjz2f5Lv0GtGGflo0F1rXcx8t5zECKwCLQJNqahhl+1DxL+9csL+mYpBkb2pa045z7lobvYNtvwMXX+jMdQz4AAAAASUVORK5CYII="
  let status = props.percent > 50 ? ok : danger
  let helstat = props.hearts > 2 ? ok : danger



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

  let full, empty;

  try {
    full = Array(props.hearts).fill(<img src={fheart} alt="" className="list-heart"></img>)
    empty = Array(4-props.hearts).fill(<img src={eheart} alt="" className="list-heart"></img>)
  } catch (error) {
      full = []
      empty = Array(4).fill(<img src={eheart} alt="" className="list-heart"></img>)
  }

  let hosp = props.hearts > 2 ? [] : [<img src={ambu} alt="" className="list-heart"></img>]

  let feed = props.foodLast > 5 ? [<img src={eat} alt="" className="list-heart"></img>] : []


  

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
      <div className="chardisp-health">{full}{empty}</div>
      <div className="chardisp-hospital">{hosp}</div>
      <div className="chardisp-helstat"><div className="health-stat">Health</div><img className="h-stat-img" src={helstat} alt=""></img></div>
      <div className="chardisp-hunger">
        <Hunger width={200} height={30} percent={props.percent} />
        <div className="hunger-percent">{props.percent}%</div>
      </div>
      <div className="chardisp-hunstat"><div className="hunger-stat">Hunger</div><img className="h-stat-img" src={status} alt=""></img></div>
      <div className="chardisp-feed">{feed}</div>
    </div>
  );
};

export default CharDisp;
