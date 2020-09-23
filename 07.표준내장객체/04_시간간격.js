let today = new Date(2020, 9-1, 23);
let examDay = new Date(2020, 12-1, 3);

let diff = examDay.getTime() - today.getTime();
let dDay = diff / (1000 * 60 * 60 * 24);
console.log(`오늘은 수능 D-${dDay}입니다.`);

