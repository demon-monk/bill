import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "../components/Input";
import { setCurrentKeyWord } from "../utils/state";
import "./home.less";

@withRouter
export default class Home extends Component {
  state = {
    keyWord: ""
  };

  onInputChange = keyWord => {
    this.setState({ keyWord });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.keyWord) {
    } else {
      setCurrentKeyWord(this.state.keyWord);
      this.props.history.push("./list");
    }
  };

  render() {
    return (
      <div className="home-page">
        <form onSubmit={this.onSubmit}>
          <Input onChangeHandler={this.onInputChange} />
          <button type="submit">搜索</button>
        </form>
      </div>
    );
  }
}
