// 1부터 1000까지 숫자 개수(강사님 해답-1)

let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 한자리 수
for (let i=1; i<=9; i++) {
    counts[i]++;
}

// 두자리 수
for (let i=10; i<=99; i++) {
    counts[parseInt(i/10)]++; // 10의 자리수에서 10을 나눠줘서 정수화 시킴 => 10의 자리수가 온다.
    counts[i % 10]++; // 10으로 나눠줘서 나머지 값 => 한자리 수가 그대로 나머지로 온다.
}

// 세자리 수 
for (let i=100; i<=999; i++) {
    counts[parseInt(i/100)]++; // 백의 자리수
    counts[parseInt((i%100)/10)]++; // 십의 자리수
    counts[i % 10]++; // 일의 자리수
}

// 네자리 수

for (let i=1000; i<=1000; i++) {
    counts[parseInt(i/1000)]++; // 천의 자리수
    counts[parseInt((i%1000)/100)]++; // 백의 자리수
    counts[parseInt((i%100)/10)]++; // 십의 자리수
    counts[i % 10]++; // 일의 자리수
}
console.log(counts);