const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), 
Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    // 可以接收参数，返回的结果可以是JavaScript的基本数据类型、对象、数组等
    console.log(response) // 打印 'pong'
}

func()




