const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    console.log(pathName);
    let html;
    if (pathName === '/')
        html = '/';
    else if (pathName === '/file')
        html = '/file';
    else
        html = pathName;

    res.end(`<h1>${html}</h1>`);

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});