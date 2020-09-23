let date = new Date();

console.log(date.toDateString());
// 현재 날짜에서 100일을 더한 날짜
date.setDate(date.getDate() + 100);
console.log(date.toDateString());

// 함부러 못바꾸게 하기 위해 set, get을 사용