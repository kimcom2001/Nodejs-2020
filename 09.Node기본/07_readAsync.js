// 비동기적으로 파일 읽기

const fs = require('fs');
fs.readFile('tmp/textfile.txt', 'utf-8', function(error, buffer) { 
    console.log(buffer);
}); // 가로가 열린 후 닫힌 곳에 ;를 붙여줘야 한다.
    // function(error, buffer)는 비동기적으로 파일 읽기 위해 추가한 내용