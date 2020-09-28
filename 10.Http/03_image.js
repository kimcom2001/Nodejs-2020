const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/Elvis.png', (error, image) => {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(image)
    });
});

/* 변경해줘야 할 사항들 
1. readFile에서 error 옆 image(안바꿔도 성능에는 상관없음)
2. res.writeHead {1,2}에서 2번째
3. res.end(변경) => 성능에 영향을 준다 */

server.listen(3000);