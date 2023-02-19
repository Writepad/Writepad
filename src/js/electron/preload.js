window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    const { contextBridge, ipcRenderer } = require('electron')
    contextBridge.exposeInMainWorld('darkMode', {
      toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
      system: () => ipcRenderer.invoke('dark-mode:system')
    })
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })