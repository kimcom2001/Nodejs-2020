const http = require('http');
const url = require('url')
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');

http.createServer(function(req, res) {
    let pathName = url.parse(req.url).pathname;
    switch(pathName) {
    case '/':
        fs.readdir('data', function(error, filelist) {
            let list = '';
            for (let file of filelist) {
                let filename = file.substring(0, file.length-4);   // .txt를 없애기 위해 뒤에서 부터 4개를 문자열에서 뺀 값
                                                                   // substring(시작점, 끝나는 점 => 왼쪽을 기준으로 시작)
                list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
            }
            let html = view.index(list);
            res.end(html);
        });
        break;

    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});