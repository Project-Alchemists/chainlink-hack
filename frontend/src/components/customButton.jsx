import React from 'react'
import "./customButton.css"

const CustomButton = (props) => {

    const styles = {
        width: props.width,
        height: props.height,
        fontSize: props.height

    }
    return(
        <div>
            <button onClick={props.onClick} className="custom-button-styling" style={styles}>{props.text}</button>
        </div>
    )
}

export default CustomButton;