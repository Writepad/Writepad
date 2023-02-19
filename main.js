const { app, BrowserWindow, ipcMain, nativeTheme, Notification } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    icon: path.join(__dirname, "./src/assets/writepad.ico"),
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src/js/electron/preload.js')
    }
  })
  // Menubar is hidden
  win.setMenuBarVisibility(false);
  // First HTML
  win.loadFile('src/index.html')

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

// Notifications
const NOTIFICATION_TITLE = 'Writepad'
const NOTIFICATION_BODY = 'Welcome to the Writepad 🤩'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

app.whenReady().then(createWindow).then(showNotification)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})