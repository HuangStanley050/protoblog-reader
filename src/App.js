import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetch } from "./store/actions/fetch";
import { withRouter } from "react-router-dom";
import style from './App.module.css';
import Blogs from "./components/Blogs";
import Template from "./components/BlogTemplate";



class App extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {


    let content = (
      <div>
      <div>
        {this.props.posts.map((data)=>{
            return <Blogs data={data} key={data.id} />;
        }
        )}
        
      </div>
      <div>
         {this.props.show?<Template/>:null}
        </div>
      </div>
    );

    if (this.props.loading) {
      content = <h1 className={style.h1}>Loading...</h1>;
    }



    return content;


  }
}

const mapStateToProps = state => {
  return {
    posts: state.post,
    loading: state.loading,
    show: state.showPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: () => dispatch(fetch())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
