const path = require('path');

console.log(__dirname);
console.log(__filename);

let filename = path.join(__dirname, 'tmp', 'textfilie.txt');
let dirtyname = path.join(__dirname, 'tmp', '..', 'textfilie.txt');
console.log(filename);
console.log(dirtyname); 
// '..'은 상위로 올라가는 것을 의미 - dirtyname에서 tmp 이후 .. 을 쓰니 textfile만 호출