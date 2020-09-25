// 동기적으로 파일 쓰기

const fs =require('fs');

let buffer = `동기적으로 파일 쓰기
동기적으로 파일 쓰기
`;
fs.writeFileSync('tmp/sync.txt', buffer); 

// 기존 파일에 데이터를 추가하는 경우 {flag: 'a'}를 해야한다.
buffer = '추가 데이터입니다.\n'
fs.writeFileSync('tmp/sync.txt', buffer, {flag: 'a'});

/* 둘이 같이 쓰는 경우, 기존의 내용은 추가가 되지 않고(중복 x),
추가적인 내용만 추가가 된다(중복 x - 한번만 실행 가능). */