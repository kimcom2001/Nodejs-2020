// 강사님 해답

function isPalindrome(str) {
    let len = str.length;
    for (let i=0; i<parseInt(len/2); i++) {
        if (str[i] !== str[len-1-i]) 
            return false;
    }    
    return true;
}

let maxPal = 0;
let maxX, maxY;
for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {
        let product = i * k;
        if (isPalindrome(String(product))) {
            if (product > maxPal) {
                maxPal = product;
                maxX = i;
                maxY = k;
            }
        }
    }
}

console.log(maxX, maxY, maxPal);