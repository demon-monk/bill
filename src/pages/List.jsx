import React, { Component } from "react";
import { getCurrentKeyWord } from "../utils/state";
import utils from "../utils";

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
    console.log(list);
    this.setState({
      list
    });
  }

  render() {
    return <div>this is list</div>;
  }
}
