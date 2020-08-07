const { app, BrowserWindow } = require('electron')
let mainWindow

function createMainWindow() {
        mainWindow = new BrowserWindow({
        title: 'Thunder Color Picker',
        width: 1280,
        height: 800
    })

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
}

app.on('ready', createMainWindow)