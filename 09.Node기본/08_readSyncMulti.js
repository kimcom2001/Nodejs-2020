// 여러개의 파일 동기적으로 읽기

const fs = require('fs');

let bufA = fs.readFileSync('tmp/a.text.txt', 'utf-8');
let bufB = fs.readFileSync('tmp/b.text.txt', 'utf-8');
let bufC = fs.readFileSync('tmp/c.text.txt', 'utf-8');
// 파일 이름을 정확히 써야한다.

console.log(bufA);
console.log(bufB);
console.log(bufC);