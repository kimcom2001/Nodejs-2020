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
                let filename = file.substring(0, file.length-4);
                list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
            }
            let html = view.index(list);
            res.end(html);
        })
        fs.readFile('view/index.html', 'utf8', (error, html) => {
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