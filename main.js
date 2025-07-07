const { app, BrowserWindow, screen } = require('electron/main')
const path = require('path')

app.commandLine.appendSwitch('class', 'owte');
app.setAppUserModelId('com.sumit.owte');
app.setName("owte");

const createWindow = () => {
     const { x: screenX, y: screenY, width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workArea

  const winWidth = 200
  const winHeight = 300

  const x = screenX
  const y = screenY + screenHeight - winHeight

  const win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x,
    y,
    frame: false,
    transparent: true,
    hasShadow: false,
    resizable: false,
    icon: path.join(__dirname,'owte.png'),
    title: "owte"
  })
  win.setTitle('owte')
  win.loadFile('index.html')
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