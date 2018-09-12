import React from "react";

import "./ForwardButton.css";



const ForwardButton = (props) => {
    return (
        <span onClick={props.forward} href = "#" className = "myButton">Forward</span>
    );
};

const mapStateToProps = state => {
    return {
        start: state.start
    };
}

export default ForwardButton;
