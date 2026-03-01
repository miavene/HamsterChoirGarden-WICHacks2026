
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.maximize(); 
  win.loadFile('renderer/index.html')
}
app.whenReady().then(() => {
  createWindow()
})