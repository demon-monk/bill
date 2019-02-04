import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "./Input";
import "./FillForm.less";
import utils from "../utils";

@withRouter
export default class FillForm extends Component {
  state = {
    patientName: "",
    patientGender: 1,
    patientAddress: "",
    billDisease: "",
    billPrice: 0,
    billRemark: ""
  };

  onPatientNameChange = name => {
    this.setState({ patientName: name });
  };

  onPatientGenderChange = ({ target }) => {
    this.setState({ patientGender: target.value });
  };

  onPatientAddressChange = address => {
    this.setState({ patientAddress: address });
  };

  onBillDiseaseChange = disease => {
    this.setState({ billDisease: disease });
  };

  onBillPriceChange = price => {
    this.setState({ billPrice: price });
  };

  onBillRemarkChange = remark => {
    this.setState({ billRemark: remark });
  };

  onSubmit = event => {
    event.preventDefault();
    const {
      patientName,
      patientGender,
      patientAddress,
      billDisease,
      billPrice,
      billRemark
    } = this.state;
    utils.saveBill({
      patientName,
      patientGender,
      patientAddress,
      billDisease,
      billPrice,
      billRemark
    });
    setTimeout(() => {
      this.props.history.push("/");
    }, 0.5);
  };

  render() {
    return (
      <div className="fill-form-comp">
        <form onSubmit={this.onSubmit}>
          <h1>病人信息</h1>
          <hr />
          <Input label="姓名" onChangeHandler={this.onPatientNameChange} />
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="1"
                name="gender"
                checked
                onChange={this.onPatientGenderChange}
              />
              男
            </label>
            <label>
              <input
                type="radio"
                value="0"
                name="gender"
                onChange={this.onPatientGenderChange}
              />
              女
            </label>
          </div>
          <Input label="地址" onChangeHandler={this.onPatientAddressChange} />
          <h1>账单信息</h1>
          <hr />
          <Input label="病情" onChangeHandler={this.onBillDiseaseChange} />
          <Input label="金额" onChangeHandler={this.onBillPriceChange} />
          <Input label="备注" onChangeHandler={this.onBillRemarkChange} />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}
