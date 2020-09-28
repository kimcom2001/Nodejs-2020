const http = require('http');
const url = require('url');
const view = require('./view/01_first.js');
const fs = require('fs');

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    if (pathName === '/') {
        let html = view.first();
        res.end(html);

    } else if (pathName === '/image') {
        fs.readFile('media/Elvis.png', (error, image) => {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(image);
        });

    } else if (pathName === '/audio') {
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
            res.writeHead(200, {'Content-Type': 'audio/mp3'});
            res.end(audio);
        });

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});