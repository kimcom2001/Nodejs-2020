let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromLiteral, numberFromConstructor);

let number = 273.1245;
console.log(number.toExponential()); // e의 몇승 * 숫자(ex-2.731245e+2)
console.log(number.toFixed(2)); // 소수점 2째자리까지
console.log(number.toPrecision(6)); // 유효자리 숫자

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); // 2의 53승 -1 => 여기까지 표현 가능
console.log(Number.MIN_SAFE_INTEGER); // -2의 53승 +1 => 여기까지 표현 가능

console.log(Math.pow(2, 53)-1);
console.log(Math.pow(-2, 53)+1);