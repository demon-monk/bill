const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");
const url = require("url");
let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL("http://localhost:1234");

  fs.readFile("./data.json", (err, data) => {
    console.log(data);
  });
});
