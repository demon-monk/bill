import React, { Component } from "react";

export default class BillView extends Component {
  render() {
    return (
      <div className="bill-view-comp">
        <div>
          <label>时间：</label>
          {this.props.time}
        </div>
        <div>
          <label>疾病：</label>
          {this.props.disease}
        </div>
        <div>
          <label>金额：</label>￥{this.props.price}
        </div>
        <div>
          <label>备注：</label>
          {this.props.remark}
        </div>
        <div>
          <label>状态：</label>
          {this.props.isChecked ? "已" : "未"}结账
        </div>
      </div>
    );
  }
}
