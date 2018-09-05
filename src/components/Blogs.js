import React, { Component } from "react";
import style from "./Blogs.module.css";
import { connect } from "react-redux";
//{props.data.content[0].text}--->shows first paragraph or title
//{props.data.content.map(post=><p>{post.text}</p>)} ---->shows all paragraphs
class Blogs extends Component {

    getPost = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className={style.Wrapper}>
           <span>{this.props.data.id}</span>
           <section className={style.content}>
            
            <h2 onClick={()=>this.getPost(this.props.data.id)}>{this.props.data.content[0].text}</h2>
           </section>
           
     </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    };
};

export default connect(mapStateToProps)(Blogs);
