let cart = [
    {
        product: {name: '치약', capacity: 500, price: 3000},
        quantity: 5
    },
    {
        product: {name: '비누', capacity: 200, price: 1000},
        quantity: 4
    }
];

/* console.log(JSON.stringify(cart));
console.log(cart[0].product.price); */


let sum = 0;
for (let item of cart) {
    sum += item.product.price * item.quantity;
}

console.log(sum);


