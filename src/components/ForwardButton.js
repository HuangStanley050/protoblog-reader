import React from "react";

import "./ForwardButton.css";



const ForwardButton = (props) => {
    return (
        <span onClick={props.forward} href = "#" className = "myButton">Forward</span>
    );
};



export default ForwardButton;
