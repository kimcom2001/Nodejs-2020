// node this.js filename

const fs = require('fs');
const readline = require('readline');

// filename을 받는 방법
if (process.argv.length < 3) {
    console.log('사용법: node this.js filename [option]');
    process.exit();
}
let filename = process.argv[2];
// option 설정
let option;
if (process.argv.length === 4) {
    if (process.argv[3] === 'append')
        option = 'a';
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('> ');
rl.prompt();

let input = '';

rl.on('line', function(buf) {
    input += buf + '\n';
    rl.prompt();
}).on('close', function() {
    if (option === 'a') {
        fs.writeFile(filename, input, {flag:'a'}, error => {
            if (error)
                console.log(error);
        });
    } else {
        fs.writeFile(filename, input, error => {
            if (error)
            console.log(error);
        
        });
    }
});

console.log('-process.argv:', process.argv);