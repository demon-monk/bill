import React, { Component } from "react";
import FillForm from "../components/FillForm";

const { ipcRenderer } = window.require("electron");

export default class New extends Component {
  componentDidMount() {
    ipcRenderer.send("data:fetch");
  }
  render() {
    return (
      <div className="new-page">
        <FillForm />
      </div>
    );
  }
}
