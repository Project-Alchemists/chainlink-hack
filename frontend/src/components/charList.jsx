import React from "react";
import CharDisp from "./charDisplay";
import "./charList.css";

const CharList = (props) => {
  return (
    <div className="list-main">
      <div className="list-child">
        <CharDisp token="ETH" gender="Male" age={35} percent={40} hearts={2} foodLast={6} name="test01"/>
        <CharDisp token="BUSD" gender="Female" age={22} percent={70} hearts={1} foodLast={6} name="test02"/>
        <CharDisp token="DAI" gender="Male" age={40} percent={100} hearts={4} name="test03"/>
        <CharDisp token="ONE" gender="Female" age={26} percent={30} hearts={0} foodLast={6} name="test04"/>
        <CharDisp token="SUSHI" gender="Male" age={32} percent={80} hearts={3} name="test05"/>
        <CharDisp token="LINK" gender="Female" age={31} percent={55} hearts={2} foodLast={6} name="test06"/>
        <CharDisp token="USDC" gender="Female" age={47} percent={75} hearts={3} name="test07"/>
        <CharDisp token="USDT" gender="Male" age={32} percent={76} hearts={1} name="test08"/>
        <CharDisp token="WBTC" gender="Female" age={54} percent={70} hearts={4} foodLast={6} name="test09"/>
        <CharDisp token="DSLA" gender="Female" age={45} percent={10} hearts={2} name="test10"/>
      </div>
    </div>
  );
};

export default CharList;
