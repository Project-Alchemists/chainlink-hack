import React from "react";
import "./hungerbar.css"

const Hunger = (props) => {

    let col;

    if (props.percent > 75){
        col = "green"
    }
    else if (props.percent > 50){
        col = "yellow"
    }
    else{
        col = "red"
    }

    const stylein = {
        width: props.percent + "%",
        height: "100%",
        backgroundColor: col,
    }

    const styleout = {
        width: props.width,
        height: props.height,
    }

    return(
        <div className="hunger-main" style={styleout}>
            <div className="hunger-progress" style={stylein}></div>
        </div>
    )
};

export default Hunger;
