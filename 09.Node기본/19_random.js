const myModule = require('./19_module.js');

for (let i=0; i<5; i++) {
    console.log(myModule.area(myModule.randInt(1, 5)));
}