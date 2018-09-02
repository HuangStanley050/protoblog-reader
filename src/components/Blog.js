import React from "react";
import style from "./Blog.module.css";
//import { connect } from "react-redux";

const Blog = (props) => {
    console.log(props);
    return (
        <div className={style.Wrapper}>
           <span>{props.time}</span>
           <section className={style.content}>
            {props.content}
           </section>
           
     </div>
    );
};

/*const mapStateToProps = state => {
    return {
        posts: state.post
    };
};*/
export default Blog;
