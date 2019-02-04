import React, { Component } from "react";
import "./BillView.less";
import utils from "../utils";

export default class BillView extends Component {
  onDeleteClick = () => {
    utils.deleteBill(this.props.patientId, this.props.billId);
    // this.setState({ active: false });
    this.props.deleteBill(this.props.patientId, this.props.billId);
  };

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
        <button onClick={this.onDeleteClick}>删除</button>
      </div>
    );
  }
}
