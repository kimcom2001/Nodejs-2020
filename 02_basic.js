// 원 둘레와 면적
let pi = 3.14159;
let radius = 5;

console.log(`반지금이 ${radius}인 원의 둘레는 ${2 * pi * radius}입니다.`);
console.log(`반지금이 ${radius}인 원의 면적는 ${pi * radius * radius}입니다.`);

// 문자열 복합대입연산자

let output = 'Hello';
output += ` World`;
output += ` 숫자도 가능합니다. `;
output += 235;
console.log(output);

// 6가지 자료형
console.log(typeof('string')); // string
console.log(typeof(273)); // number
console.log(typeof(true)); // bool
console.log(typeof(function(){})); // function
console.log(typeof({})); // object
console.log(typeof(alpha)); // undefied


// 자료형 변환
console.log(Number('273'));
console.log(Number(true));
console.log(Number('52.7'));

console.log(parseInt('273')); // 정수만 표시됨(소수 표시 x)
console.log(parseInt(true));
console.log(parseInt('52.7'));

console.log(parseFloat('273')); // 소수까지 포시됨
console.log(parseFloat(true));
console.log(parseFloat('52.7'));

// 숫자의 문자열 자동 변환
console.log(52 + 273);
console.log("52" + 273);
console.log(52 + "273");
console.log("52" + "273");
 
// 일치 연산자
console.log(`52 == "52": ${52 == "52"}`);
console.log(`52 === "52": ${52 === "52"}`);
console.log();
console.log(`0 == "": ${0 == ""}`);
console.log(`0 === "": ${0 === ""}`);

// 상수를 선언합니다.
const constant = "상수";
constant = "Constant";
constant.log(constant);
