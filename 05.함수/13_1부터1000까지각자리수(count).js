// 강사님 해답-2

let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i=1; i<=1000; i++) {
    let numString = String(i);
    for (let digit of numString) {
        counts[parseInt(digit)]++;
    }
}

console.log(counts);