const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(audio)
    });
});

/* 변경해줘야 할 사항들 
1. readFile에서 error 옆 image(안바꿔도 성능에는 상관없음)
2. res.writeHead {1,2}에서 2번째
3. res.end(변경) => 성능에 영향을 준다 */

server.listen(3000);