import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getCurrentKeyWord } from "../utils/state";
import utils from "../utils";
import PatientView from "../components/PatientView";
import BillView from "../components/BillView";

@withRouter
export default class List extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    const currentKeyWord = getCurrentKeyWord();
    const patients = utils.searchPatient(currentKeyWord);
    const list = patients.map(patient => ({
      patientInfo: patient,
      billsInfo: utils.getBillsFromPatient(patient)
    }));
    this.setState({
      list
    });
  }

  onBackClick = () => {
    this.props.history.push("/");
  };

  deleteBill = (patientId, billId) => {
    this.state.list.forEach(listItem => {
      const { patientInfo, billsInfo } = listItem;
      if (patientInfo.id === patientId) {
        const patientBillIndex = patientInfo.bills.indexOf(billId);
        patientInfo.bills.splice(patientBillIndex, 1);
        const billIndex = billsInfo.findIndex(bill => bill.id === billId);
        billsInfo.splice(billIndex, 1);
      }
    });
    this.setState({
      list: [...this.state.list]
    });
  };

  render() {
    return (
      <div>
        {this.state.list.map(listItem => (
          <div className="patientWrapper" key={listItem.patientInfo.id}>
            <h1>{listItem.patientInfo.name}</h1>
            <h1>病人信息</h1>
            <PatientView {...listItem.patientInfo} />
            <h2>账单信息</h2>
            {listItem.billsInfo && listItem.billsInfo.length
              ? listItem.billsInfo.map(bill => (
                  <div>
                    <BillView
                      {...bill}
                      key={bill.id}
                      patientId={listItem.patientInfo.id}
                      billId={bill.id}
                      deleteBill={this.deleteBill}
                    />
                  </div>
                ))
              : "没有未清算账单"}
          </div>
        ))}
        <button onClick={this.onBackClick}>返回</button>
      </div>
    );
  }
}
