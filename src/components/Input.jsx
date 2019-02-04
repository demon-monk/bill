import React, { Component } from "react";
import "./input.less";

export default class Input extends Component {
  state = {
    value: ""
  };

  onChange = ({ target }) => {
    const { value } = target;
    this.setState({
      value
    });
    this.props.onChangeHandler && this.props.onChangeHandler(value);
  };

  render() {
    return (
      <div className="input-comp">
        {this.props.label && <label>{this.props.label}：</label>}
        <input
          value={this.state.value}
          onChange={this.onChange}
          type={this.props.type}
          name={this.props.name}
          checked={this.props.checked}
        />
      </div>
    );
  }
}
