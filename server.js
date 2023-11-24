// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, ()=> {
//     console.log('Serve rrunning at http://${hostname}:${port}')
// })

const express = require('express');
const app = express();
app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ...")
});
app.get("/book", function(req, res){
    res.send("도서 페이지입니다.")
})