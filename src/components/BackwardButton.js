import React from "react";

import "./BackwardButton.css";



const BackwardButton = (props) => {
    return (
        <span onClick={props.backward} href = "#" className = "backButton">Backward</span>
    );
};



export default BackwardButton;
