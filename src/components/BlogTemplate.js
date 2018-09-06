import React from "react";
import style from "./BlogTemplate.module.css";
import { connect } from "react-redux";
import { toggle } from "../store/actions/toggle";

const Template = (props) => {
    return (
        <div className={style.Modal}>
            
            <div className={style.Content}>
            <button className={style.button} onClick={props.toggle}>Close Post</button>
            </div>
            </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggle())
    }
}

export default connect(null, mapDispatchToProps)(Template);
