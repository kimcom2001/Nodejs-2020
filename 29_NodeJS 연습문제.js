// 1. 양의 정수 N을 입력으로 받아 1부터 N까지 제곱의 합과 합의 제곱을 구하시오.

function getDivisors(num) {
    let divArray = [];
    for (let k=1; k<num; k++) {
        divArray.push(k);
    }
    return divArray;
}

function sumArray(array) {
    let sum = 0;
    let array = getDivisors(num);
    for (let element of array) 
        sum += element*element;
    return sum;
}
console.log(getDivisors(5));



