import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetch } from "./store/actions/fetch";
import style from './App.module.css';
import Blog from "./components/Blog";



class App extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    let content = (
      <div>
        {this.props.posts.map((data)=>{
            return <Blog data={data} key={data.id} />
        }
        )}
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
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: () => dispatch(fetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
