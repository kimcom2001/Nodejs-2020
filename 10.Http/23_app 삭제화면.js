const http = require('http');
const url = require('url')
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
const template = require('./view/template');

http.createServer(function(req, res) {
    let pathName = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    let body;
    // if문을 사용할 경우 괄호를 열고 닫아서 이곳에서 선언을 안해줘도 되는데, switch는 괄호가 없기때문에 맨 앞에서 선언해 줘야한다.
    console.log(pathName, query.id);
    switch(pathName) {
    case '/':
        if (query.id === undefined) {
            fs.readdir('data', function(error, filelist) {
                let list = template.listGen(filelist);
                let content = template.HOME_CONTENTS;
                let control = template.buttonGen();
                let html = view.index('Web 기술', list, content, control);
                res.end(html);
            });
        } else {
            fs.readdir('data', function(error, filelist) {
                let list = template.listGen(filelist);
                let title = query.id;
                let control = template.buttonGen(title);
                let filename = 'data/' + title + '.txt';
                fs.readFile(filename, 'utf8', (error, buffer) => {
                    let html = view.index(title, list, buffer, control);
                    res.end(html);
                });
            });
        }
        break;
    case '/create':
        fs.readdir('data', function(error, filelist) {
            let list = template.listGen(filelist);
            let control = template.buttonGen();
            let content = template.createForm();
            let html = view.index('글 생성', list, content, control);
            res.end(html);
        });
        break;

        // 위의 화면은 글을 작성하는 것일뿐, 작성 후 '생성'이라는 버튼을 누르면 아래로 이동
        // let body에서 데이터 수집 후 데이터는 data에 생성됨과 동시에 end화면으로 넘어가서 사용자에게 작성글을 보여준다.
    
    case '/create_proc':
        body = ''; // 맨 위쪽에 let body를 했으므로 뒤에서는 let을 지워줘야 한다 => 선언은 한번만
        req.on('data', function(data){
            body += data;
        })

        req.on('end', function() {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.subject, param.description);
            let filepath = 'data/' + param.subject + '.txt';
            fs.writeFile(filepath, param.description, error => {
                res.writeHead(302, {'Location': `/?id=${param.subject}`});
                res.end();
            });
        });
        break;

    case '/delete':
        fs.readdir('data', function(error, filelist) {
            let list = template.listGen(filelist);
            let control = template.buttonGen();
            let content = template.deleteForm(query.id);
            let html = view.index('글 삭제', list, content, control);
            res.end(html);
        });
        break;
    
    case '/delete_proc':
        body = ''; // 맨 위쪽에 let body를 했으므로 뒤에서는 let을 지워줘야 한다 => 선언은 한번만
        req.on('data', function(data){
            body += data;
        })

        req.on('end', function() {
            let param = qs.parse(body);
            let filepath = 'data/' + param.subject + '.txt';
            fs.unlink(filepath, error => {
                res.writeHead(302, {'Location': `/`});
                res.end();
            });
        });
        break;
    

    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});