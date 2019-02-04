import React, { Component } from "react";

export default class PatientView extends Component {
  render() {
    return (
      <div className="patient-view-comp">
        <div>
          <label>姓名: </label>
          {this.props.name}
        </div>
        <div>
          <label>性别: </label>
          {this.props.gender ? "男" : "女"}
        </div>
        {this.props.address && (
          <div>
            <label>地址: </label>
            {this.props.address}
          </div>
        )}
      </div>
    );
  }
}
