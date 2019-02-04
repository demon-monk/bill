import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FillForm from "../components/FillForm";
import "./New.less";

const { ipcRenderer } = window.require("electron");

@withRouter
export default class New extends Component {
  componentDidMount() {
    ipcRenderer.send("data:fetch");
  }

  onBackClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="new-page">
        <div>
          <button className="back-btn" onClick={this.onBackClick}>
            返回
          </button>
        </div>
        <FillForm />
      </div>
    );
  }
}
