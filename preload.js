const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronApi', {
    openUrl: (url) => {
        ipcRenderer.send('open-url', url);
    }
});
