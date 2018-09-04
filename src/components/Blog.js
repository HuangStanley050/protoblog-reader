import React from "react";
import style from "./Blog.module.css";
//import { connect } from "react-redux";
//{props.data.content[0].text}
const Blog = (props) => {
    console.log(props);
    return (
        <div className={style.Wrapper}>
           <span>{props.data.id}</span>
           <section className={style.content}>
            {props.data.content.map(post=><p>{post.text}</p>)}
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
