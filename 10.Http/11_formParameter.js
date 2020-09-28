const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    console.log(query.name, query.region);

    // GET 파라미터 출력 localhose:3000?name=Kim&region=seoul => query이기 때문에 '/'이 아닌 '?'으로 연결해야 한다.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1> ${JSON.stringify(query)} </h1>`);

}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});