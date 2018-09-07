import React from "react";
import style from "./BlogTemplate.module.css";
import { connect } from "react-redux";
import { toggle } from "../store/actions/toggle";

const Template = (props) => {
    let content = [];
    return (
        <div className={style.Modal}>
            
            <div className={style.Content}>
            <button className={style.button} onClick={props.toggle}>Close Post</button>
            {props.posts.map(post=>{
                if(props.ID===post.id){
                    //return <h3>{post.content[0].text}</h3>
                    content=post.content.map(paragraph=>{
                        return <p>{paragraph.text}</p>;
                    });
                }
            })}
            {content}
            </div>
            </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(toggle())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post,
        ID: state.activeID
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
