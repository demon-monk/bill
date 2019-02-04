import React, { Component } from "react";

export default class Input extends Component {
  state = {
    value: ""
  };

  onChange = event => {
    this.setState({
      value: event
    });
  };

  render() {
    return (
      <div>
        {this.props.label && <label>{this.props.label}</label>}
        <input value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}
