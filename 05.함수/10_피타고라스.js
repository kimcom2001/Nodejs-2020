/* // 2번 문제

function pythagorasNumber() {
    let pythagorasArray = [];
    for (let a=1; a<=333; a++) {
        for (let c=1; c<500; c++) {
            if (a*a + (1000-a-c)*(1000-a-c) ===c*c) {
                pythagorasArray.push(a, 1000-a-c, c);
            }
        }
    }
    return pythagorasArray;
}

console.log(pythagorasNumber()); */

// 강사님 해답

let a, b, c;
let outerBreak = false;
for (a=1; a<332; a++) {
    for (b=a+1; b<499; b++) {
        c = 1000 - a - b;
        if (c > (a + b)) {  // 원래 조건은 (a + b) > c
            continue;
        }
        if (c*c === a*a + b*b) {
            console.log(a, b, c);
            console.log(a*a, b*b, c*c);
            outerBreak = true;
            break;
        }
    }
    if (outerBreak) {
        break;
    }
}