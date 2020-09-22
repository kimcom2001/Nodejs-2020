/* // Array 원소의 합을 계산해주는 함수
function sumArray(arr) {
    let sum = 0;
    for (let element of arr) 
        sum += element;
    return sum;
}

for (let i=2; i<=10000; i++) {
    // 약수 구하기
    let array = getDivisors(i);
    // 약수의 합 구하기
    let divSum = sumArray(array);
    // 숫자 비교하기
    if (i === divSum) {
        console.log(i);
        console.log(array);
    } 
} */
















// 2. a + b + c = 1000 인 피타고라스 수를 구하시오. 즉, a*a + b*b = c*c 을 만족하고 a < b < c 이고, a + b > c 이다.


















// 3. 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 초로 환산하면 총 몇 초(second) 인가?

















/* ​4. 1에서 1000까지 각 숫자의 갯수를 구하시오.
    예) 10 ~ 15
        10 => 1, 0
        11 => 1, 1
        12 => 1, 2
        13 => 1, 3
        14 => 1, 4
        15 => 1, 5 
    즉, 0: 1개, 1: 7개, 2: 1개, 3: 1개, 4: 1개, 5: 1개 */














​// 5. 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수(palindrome)와 세자리 수를 구하시오. 단, 대칭수는 12321과 같은 수를 의미함.