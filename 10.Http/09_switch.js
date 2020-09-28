const http = require('http');
const url = require('url');
const view = require('./view/01_first.js');
const fs = require('fs');

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    switch(pathName) {

    case '/':
        let html = view.first();
        res.end(html);
        break

    case '/image':
        fs.readFile('media/Elvis.png', (error, image) => {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(image);
        });
        break

    case '/audio':
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
            res.writeHead(200, {'Content-Type': 'audio/mp3'});
            res.end(audio);
        });
        break

    case '/favicon.ico':
        fs.readFile('media/finger.png', (error, image) => {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(image);
        });
        break

    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});