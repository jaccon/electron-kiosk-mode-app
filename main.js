const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        fullscreen: true, // Set to true for full-screen mode
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Load the URL
    mainWindow.loadURL('https://tv.donaanadocesesalgados.com.br/canal-loja-01/');

    // Open DevTools (optional)
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        app.quit();
    });
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
