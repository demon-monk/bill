const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const util = require("util");
fs.readFile = util.promisify(fs.readFile);
let mainWindow;

function loadData() {
  let patients, bills;
  fs.readFile("./bills.json")
    .then(data => (bills = JSON.parse(data.toString())))
    .then(() => fs.readFile("./patients.json"))
    .then(data => (patients = JSON.parse(data.toString())))
    .then(_ => {
      mainWindow.webContents.send(
        "data:loaded",
        JSON.stringify({ patients, bills })
      );
      return { patients, bills };
    });
}

app.on("ready", async () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL("http://localhost:1234");
  setTimeout(() => {
    loadData();
  }, 1000);
});

ipcMain.on("data:fetch", () => {
  loadData();
});

ipcMain.on("patients:save", (event, patientsJson) => {
  fs.writeFile("./patients.json", patientsJson, () => {});
});

ipcMain.on("bills:save", (event, billsJson) => {
  fs.writeFile("./bills.json", billsJson, () => {});
});
