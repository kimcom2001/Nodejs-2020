/* // 1번 문제

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('정수 입력> ');
rl.prompt();


rl.on('line', function(num) {

    let input = parseInt(num);
    for (let i=0; i<1; i++) {

        let array = getArray(num);
        
        console.log('각 숫자의 제곱을 더한 값 :',sumSqure(array));
        console.log('각 숫자 더한 값의 제곱 값 :',sumSqure2(array)*sumSqure2(array));

    rl.close()
    }
});


function getArray(num) {
    let divArray = [];
    for (let k=1; k<=num; k++) {
        divArray.push(k);
    }
    return divArray;
}


function sumSqure(array) {
    let sum = 0;
    for (let element of array) {
        sum += element*element;
    }
    return sum;
}

function sumSqure2(array) {
    let sum1 = 0;
    for (let element of array) {
        sum1 += element;
    }
    return sum1;
}
 */
// 강사님 해답

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('양의 정수> ');
rl.prompt();


rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let number = parseInt(buf)

    let sumOfSquare = 0; // 제곱의 합
    for (let i=1; i<=number; i++) {
        sumOfSquare += i * i;
    }
    console.log(`1에서 ${number}까지의 제곱의 합: ${sumOfSquare}`)

    let sum = 0; //합의 제곱
    for (let i=1; i<=number; i++) {
        sum += i;
    }
    let squureOfSum = sum * sum; //합의 제곱
    console.log(`1에서 ${number}까지의 제곱의 합: ${squureOfSum}`)


    rl.close()
});