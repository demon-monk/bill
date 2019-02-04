const { ipcRenderer } = window.require("electron");

let patients, bills;
ipcRenderer.on("data:loaded", (event, jsonData) => {
  const { patients: patient, bills: bill } = JSON.parse(jsonData);
  patients = patient;
  bills = bill;
  console.log(patients);
  console.log(bills);
});

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
  }
};
