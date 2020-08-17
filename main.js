const { app, BrowserWindow } = require('electron')
let mainWindow

function createMainWindow() {
        mainWindow = new BrowserWindow({
        title: 'Thunder Color Picker',
        width: 1024,
        height: 768,
            webPreferences: {
            nodeIntegration: true
            }
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createMainWindow)