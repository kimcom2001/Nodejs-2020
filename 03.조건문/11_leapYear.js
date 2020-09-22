const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('년도 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let year = parseInt(buf);
    let leapYear;
    if (year % 400 === 0) {
        leapYear = '윤년입';
    } else if (year % 100 ===0) {
        leapYear = '윤년이 아닙';
    } else if (year % 4 === 0) {
        leapYear = '윤년입';
    } else {
        leapYear = '윤년이 아닙';
    }
    console.log(`이번 ${year}년은 ${leapYear}니다`);
    
    
    // 끝날 때 반드시 처리해야 함
    rl.close();
});