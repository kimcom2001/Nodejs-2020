/* let fn = function() {
    console.log('익명함수입니다.');
}

fn(); // 함수를 불러야 호출이 된다. */


let name = '외부 이름';
let price = '외부 가격';
let product = {
    name: '치약',
    capacity: 500,
    price: 3000,
    print: function() {
        console.log(`제품명은 ${name}이고, 가격은 ${price}입니다.`);
        console.log(`제품명은 ${this.name}이고, 가격은 ${this.price}입니다.`);
    },
    string: function() {
        return `제품명은 ${this.name}이고, 가격은 ${this.price}입니다.`; // '' 와 ``는 다르다
    }
} 

product.print()
console.log(product.string())