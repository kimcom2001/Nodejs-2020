const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(audio)
    });
});

/* 변경해줘야 할 사항들 
1. readFile에서 error 옆 audio는 바꾸지 않아도 영향이 없다.
2. res.writeHead {1,2}에서 2번째 => 영향을 준다.
3. res.end(변경) => 영향을 준다 */

server.listen(3000);