let persons = [
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 26}
];

// for문의 of는 error!!

/* for (let person of persons) {
    console.log(person);
} */

for (let person in persons) { // 여기는 in을 사용
    console.log(person, persons[person]); //person 은 key, person의 object는 값
}

for (let person of persons) {  // 여기는 of를 사용
    console.log(person.name, person.gender, person.age); //person 은 key, person의 object는 값
}

console.log(persons[0]);  // 1번째가 홍길동 신상정보
console.log(persons[0].name); // 1번째 홍길동 신상정보 중 이름만