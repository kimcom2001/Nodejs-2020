const async = require('async')
const fs = require('fs');

// 순서 보장이 안되는 문제를 async 모듈을 사용하여 해결
async.parallel({
    bufA:   function(callback) {
        fs.readFile('tmp/a.text.txt', 'utf8', callback);
    },
    bufB:   callback => {
        fs.readFile('tmp/b.text.txt', 'utf8', callback);
    },
    bufC:   callback => {
        fs.readFile('tmp/c.text.txt', 'utf8', callback);
    },
}, function(error,results) {
    console.log(results.bufA)
    console.log(results.bufB)
    console.log(results.bufC)
});
