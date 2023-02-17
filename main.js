const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    icon: path.join(__dirname, "./src/assets/writepad.ico"),
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // Menubar is hidden
  win.setMenuBarVisibility(false);
  // First HTML
  win.loadFile('index.html')
  /**
   * Second HTML
   * win.loadFile('src/index.html')
   */
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})