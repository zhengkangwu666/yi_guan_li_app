// 渲染进程默认沙盒化，无法直接访问主进程的模块，但可以通过
//  1. preload.js文件
//  2. IPC（进程间通信）
// 来实现

// preload.js文件默认也是沙盒化的，只拥有一个受限的require函数

const { contextBridge, ipcRenderer } = require('electron')

// 暴露到渲染进程的全局
// 暴露名为versions的对象，包含node、chrome、electron版本
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    // 除函数之外，我们也可以暴露变量
})



