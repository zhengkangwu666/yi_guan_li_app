const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

// 当应用准备就绪时
app.whenReady().then(() => {
    ipcMain.handle('ping', () => {
        return 'pong'
    })
    createWindow()

    // activate是macOS特有的状态
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// 当所有窗口关闭时
app.on('window-all-closed', () => {
    // 如果不是macOS平台，则退出应用
    if (process.platform !== 'darwin') {
        app.quit()
    }
})







