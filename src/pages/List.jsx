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

  render() {
    return (
      <div>
        {this.state.list.map(listItem => (
          <div className="patientWrapper" key={listItem.patientInfo.id}>
            <h1>{listItem.patientInfo.name}</h1>
            <h1>病人信息</h1>
            <PatientView {...listItem.patientInfo} />
            {listItem.billsInfo.map(bill => (
              <div>
                <h2>账单信息</h2>
                <BillView {...bill} key={bill.id} />
              </div>
            ))}
          </div>
        ))}
        <button onClick={this.onBackClick}>返回</button>
      </div>
    );
  }
}
