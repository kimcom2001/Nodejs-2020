// 배열
let arrayPersonInfo = ['홍길동', '남자', '29'];
console.log(arrayPersonInfo[0], arrayPersonInfo[1], arrayPersonInfo[2]);

// 객체(Object)
let personInfo = {
    'name': '홍길동',
    'gender': '남자',
    'age': '29'
}
console.log(personInfo['name'], personInfo['gender'], personInfo['age']);

let person = {
    name: '홍길동', gender: '남자', age: 29
}
console.log(person.name, person.gender, person.age);

console.log(process.env.JAVA_HOME);