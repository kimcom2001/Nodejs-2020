// exit 이벤트를 연결합니다.
process.on('exit', function(code) {
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:', code);
});

// uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', (error) => {
    console.log('예외가 발생했습니다.');
    console.log('uncaughtException 매개변수\n', error);
});

// 임의의 이벤트를 연결
process.on('message', () => {
    console.log('message.event');
});

// 예외롤 강제로 발생시킵니다.
error.error.error();