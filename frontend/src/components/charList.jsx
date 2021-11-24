import React from "react";
import CharDisp from "./charDisplay";
import "./charList.css";

const CharList = (props) => {
  return (
    <div className="list-main">
      <div className="list-child">
        <CharDisp token="ETH" gender="Male" age={35} percent={40} name="krishanu"/>
        <CharDisp token="BUSD" gender="Female"/>
        <CharDisp />
        <CharDisp />
        <CharDisp />
        <CharDisp />
        <CharDisp />
        <CharDisp />
      </div>
    </div>
  );
};

export default CharList;
