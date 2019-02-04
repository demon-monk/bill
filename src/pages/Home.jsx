import React, { Component } from "react";
import Input from "../components/Input";
import "./home.less";
export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <form>
          <Input />
          <button type="submit">搜索</button>
        </form>
      </div>
    );
  }
}
