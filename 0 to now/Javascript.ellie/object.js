// Objects
// object = { key : value };
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;  // 다른 언어와 달리 이렇게 뒤에 추가할 수 있다.
console.log(ellie.hasJob);

delete ellie.hasJob; // 후에 삭제도 가능하다.
console.log(ellie.hasJob);

//2. computed properties
console.log(ellie.name); // 그 키에 해당하는 값을 받고 싶을때 (코딩할땐 닷을 주로 사용)
console.log(ellie['name']); //computed property 는 run time에서 결정될때 (실시간으로 사용) 어떤 키를 사용하고싶은지 모를때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 5. in operator 프로퍼티안에 키가 있는지 없는 지 확인할 수 있다.

//6. for...in
for (key in ellie){
    console.log(key);
}
//for in 문 드디어 이해... 엘리안에 있는 키 값을 모두 하나씩 대입한다. 밑 console.log key 위치에

const array = [1, 2, 4, 5];
for (value of array){
    console.log(value);
}
// for in 문과 차이는 모르겟다.

//7 cloning
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user.name);

// cloning old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);

console.log(user4);