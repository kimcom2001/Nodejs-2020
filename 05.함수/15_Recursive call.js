/* // 재귀적 호출 (Recursive call)

function facto(n) {
    if (n === 0)
        return 1;
    return n * facto(n-1);
}

console.log(facto(5))
 */



// Fibonacci 수열 - 0부터 시작한다. Fibo(0)일때 1/ Fibo(1)일때 1/ Fibo(2)일때 2

function Fibo(n) {

    if ( n === 0 | n === 1) 
        return 1;
    return Fibo(n-1) + Fibo(n-2);
}

console.log(Fibo(10));