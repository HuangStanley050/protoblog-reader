import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchStart, fetch } from "./store/actions/fetch";
import style from './App.module.css';
import Blog from "./components/Blog";



class App extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        <Blog/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: () => dispatch(fetch())
  };
};

export default connect(null, mapDispatchToProps)(App);
