const { ipcRenderer } = window.require("electron");

let patients = {},
  bills = {};
ipcRenderer.on("data:loaded", (event, jsonData) => {
  const { patients: patient, bills: bill } = JSON.parse(jsonData);
  patients = patient;
  bills = bill;
  console.log(patients);
  console.log(bills);
});

function createNewPatient(name, gender, address, id) {
  return {
    id,
    name,
    address,
    gender,
    bills: []
  };
}

function createNewBill(id, disease, price, remark) {
  return {
    id,
    disease,
    price,
    remark,
    time: new Date(id).toLocaleString()
  };
}

function _doSaveInfo() {
  ipcRenderer.send("patients:save", JSON.stringify(patients));
  ipcRenderer.send("bills:save", JSON.stringify(bills));
}

export default {
  getPatitents: () => patients,
  getBills: () => bills,
  searchPatient: patientName => {
    return Object.keys(patients)
      .map(key => patients[key])
      .filter(patient => patient.name.includes(patientName));
  },
  getBillsFromPatient: patient => {
    return patient.bills.map(billId => bills[billId]);
  },
  saveBill: info => {
    const {
      patientName,
      patientGender,
      patientAddress,
      billDisease,
      billPrice,
      billRemark
    } = info;
    let currentPatientId = Object.keys(patients).find(patientId => {
      const patient = patients[patientId];
      return (
        patient.name === patientName &&
        patient.gender === patientGender &&
        patient.address === patientAddress
      );
    });
    let currentPatient = currentPatientId && patients[currentPatientId];
    const currentTime = Date.now();
    if (!currentPatient) {
      currentPatient = createNewPatient(
        patientName,
        patientGender,
        patientAddress,
        currentTime
      );
      patients[currentTime] = currentPatient;
    }
    currentPatient.bills.push(currentTime);
    const currentBill = createNewBill(
      currentTime,
      billDisease,
      billPrice,
      billRemark
    );
    bills[currentTime] = currentBill;
    console.log(bills);
    console.log(patients);
    _doSaveInfo();
  }
};
