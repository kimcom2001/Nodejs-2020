const http = require('http');
const url = require('url')
const qs = require('querystring');
const fs = require('fs');

http.createServer(function(req, res) {
    let pathName = url.parse(req.url).pathname // let의 pathName과 url뒤쪽 pathname은 사용 용도가 다르다.
    if (pathName === '/') {
        fs.readFile('view/12_formPost.html', 'utf8', (error, html) => {
            res.end(html);
        });
    } else if (pathName === '/proc') {
        let body = '';
        req.on('data', function(data){
            body += data;
        })

        req.on('end', function() {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);
            res.end(`<h1>${JSON.stringify(param)}</h1>`); 
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});