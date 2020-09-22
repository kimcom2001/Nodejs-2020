// String Length - 속성(괄호가 안붙는다.)
let hello = '안녕하세요?';
console.log(hello.length);

// String내에서 문자열을 찾을 때
console.log(hello.indexOf('하'));
console.log(hello.indexOf('한'));

let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf('locate');
console.log(pos);

console.log(str.search('locate'));

// 문자열의 일부 추출

let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13); // 시작 - 끝(마지막 숫자는 포함하지 않는다.)
console.log(res);
console.log(str.slice(-4));

console.log(str.substr(7,6)); // 인덱스 위치 - 문자열 개수

// 문자열 대체

let newStr = str.replace(',',':');
console.log(newStr);
newStr = str.replace(/,/g, ':'); // Regular Expression - 정규 표현식
console.log(newStr);

// 공백 제거

str1 = "       Hello World!        ";
console.log(str1.trim());

// 문자 추출
let hello = '안녕하세요?';
console.log(hello.charAt(2), hello[2])

// 문자열을 Array로 변경
let txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
console.log(txt.split(","));



