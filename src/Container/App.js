import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Vedio from "./Vedio/Vedio";

import * as actionCreators from './../Store/ActionCrreators/index';

class App extends Component {
  componentDidMount(){
    this.props.fetchData();
  }
  render() {
    return (
      <div className="app">
        <div className="app_vedios">
          {this.props.posts.map(ele => {
            return <Vedio key={ele.id} src={ele.data.src}
            likes={ele.data.likes}
            shares={ele.data.shares}
            messages={ele.data.messages}
            channel={ele.data.channel}
            description={ele.data.description}
            song={ele.data.song} />
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData: ()=>{dispatch(actionCreators.getdata())}
  }
};

const mapStateToProps = (state) => {
  return{
    posts: state.data.posts
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
