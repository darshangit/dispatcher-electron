const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const menuManager = require('./menu-manager')

let win 
const iconPath = path.join(__dirname, '../src/assets/icon/icon.png')

app.on('ready', appReady)

function appReady() {
    menuManager.onAbout = () => {console.log('You REALLY clicked about..')}
    const menu = menuManager.build()
    Menu.setApplicationMenu(menu)

    createWindow()
}

function createWindow() {
    win = new BrowserWindow({width: 1200, height: 800, title: 'Dispatcher', icon: iconPath})

    win.loadURL(url.format({
        pathname: path.join(__dirname, '../www/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.on('closed', () => {
        win = null
    })
}

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(win === null) {
        createWindow()
    }
})

