// 여러개 파일 비동기적으로 읽기

const fs = require('fs');

fs.readFile('tmp/a.txt', 'utf-8', (e, bufA) => {
    console.log(bufA);
});

fs.readFile('tmp/b.txt', 'utf-8', (e, bufB) => {
    console.log(bufB);
});

fs.readFile('tmp/c.txt', 'utf-8', (e, bufC) => {
    console.log(bufC);
});

// 순서에 대한 보장이 없다(같을 수도 있지만 계속 실행하면 결과 순서가 다르다.)

// 순서보장 해결방법

fs.readFile('tmp/a.txt', 'utf-8', (e, bufA) => {
    fs.readFile('tmp/b.txt', 'utf-8', (e, bufB) => {
        fs.readFile('tmp/c.txt', 'utf-8', (e, bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});

// 콜백 지옥 - 안에 안에 안에 들어가서 호출