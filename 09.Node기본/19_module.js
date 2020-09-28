const myModule = require(`./20_myModule.js`);

for (let i=0; i<5; i++) {
    console.log(myModule.area(myModule.randInt(1,5)));
}