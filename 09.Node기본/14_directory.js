// 디렉토리에 있는 파일 목록 알아내기

const fs = require('fs');
fs.readdir('tmp', function(e, files) {
    for (let file of files) {
        let filename = 'tmp/' +file;
        let stat = fs.statSync(filename);
        console.log(file, '\t', stat.size,'byte');
    }
});

// 파일 삭제하기

fs.unlink('tmp/tmp.txt', error => {
    if (error)
        throw error;
});


// read와 delete를 동시에 실행하기 때문에 error가 발생

// process.exit(파일 삭제하기 명령어 끝난 후)를 명령하거나, read파일을 주석으로 달아놓는다.

// 파일 이름 변경하기

fs.rename('tmp/sync.txt', 'tmp/tmp.txt', error => {
    if (error)
        console.log(error);
});