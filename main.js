const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");
const util = require("util");
fs.readFile = util.promisify(fs.readFile);
let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL("http://localhost:1234");

  let patients, bills;

  fs.readFile("./bills.json")
    .then(data => (bills = JSON.parse(data.toString())))
    .then(() => fs.readFile("./patients.json"))
    .then(data => (patients = JSON.parse(data.toString())))
    .then(_ => {
      console.log({ patients, bills });
      mainWindow.webContents.send(
        "data:loaded",
        JSON.stringify({ patients, bills })
      );
    });
});
