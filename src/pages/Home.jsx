import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "../components/Input";
import { setCurrentKeyWord } from "../utils/state";
import "./home.less";
const { ipcRenderer } = window.require("electron");
@withRouter
export default class Home extends Component {
  state = {
    keyWord: ""
  };

  componentDidMount() {
    ipcRenderer.send("data:fetch");
  }

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

  onNewBillClicked = () => {
    this.props.history.push("/new");
  };

  render() {
    return (
      <div className="home-page">
        <div className="new-bill">
          <button className="new-bill-btn" onClick={this.onNewBillClicked}>
            新建账单
          </button>
        </div>
        <form onSubmit={this.onSubmit}>
          <Input onChangeHandler={this.onInputChange} />
          <button type="submit">搜索</button>
        </form>
      </div>
    );
  }
}
