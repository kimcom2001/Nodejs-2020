const http = require('http');
const veiw = require('./view/01_first.js');

let server = http.createServer(function(request, response) {
    // console.log(request);
    let html = veiw.first();
    response.writeHead(200,   // Status code, OK
        {'Content-Type': 'text/html'});
    response.end(html);
});

server.listen(3000);

// cmd에서 서버를 실행해야 홈페이지에서 나타난다.
// cmd에서 종료하면 서버도 없어진다.