const { app, BrowserWindow } = require('electron')
let mainWindow

function createMainWindow() {
        mainWindow = new BrowserWindow({
        title: 'Thunder Color Picker',
        width: 1280,
        height: 800,
            webPreferences: {
            nodeIntegration: true
            }
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createMainWindow)