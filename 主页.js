const express = require('express');
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});