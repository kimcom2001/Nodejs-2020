let persons = [
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 26}
];

let externalForm = JSON.stringify(persons);
console.log(externalForm);

let p = JSON.parse(externalForm);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}

