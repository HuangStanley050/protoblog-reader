import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetch } from "./store/actions/fetch";
import ForwardButton from "./components/ForwardButton";
import style from './App.module.css';
import Blogs from "./components/Blogs";
import Template from "./components/BlogTemplate";

/*   ***********show all blogs****************8

this.props.posts.map((data)=>{
            return <Blogs data={data} key={data.id} />;
          }
        )

*/

class App extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    //trying to show 3 blogs entries at the time//
    let temp = [];
    temp = this.props.posts.slice(this.props.start, this.props.start + 3);
    console.log(temp);

    let content = (
      <div className={style.container}>
      <div>
        {temp.map(data=>{return <Blogs data={data} key={data.id}/>;})}
        
      </div>
      <div>
         {this.props.show?<Template/>:null}
        </div>
      <ForwardButton/>
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
    show: state.showPost,
    start: state.start
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: () => dispatch(fetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
