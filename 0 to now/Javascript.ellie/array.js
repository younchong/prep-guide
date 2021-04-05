'use strict';

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


//2. index position
const fruits = ['app', 'banana'];
console.log(fruits);
console.log(fruits[1]);

console.clear();
// 3. Looping over an array
for( let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for of
for(let fruit of fruits){
    console.log(fruit);
}

//for Each  배열안에 있는 value들마다 내가 전달할 함수를 출력

fruits.forEach( (fruit, index) =>console.log(fruit)); 

console.clear();
//4. Addition, deletion, copy

/* note!! shift, unshift are slower than pop, push
        앞에서 제거, 앞에서부터 추가    뒤에서 제거 , 뒤에서 추가
        인덱스 순서에 따라 하나씩 밀고 앞에 넣기 때문에  pop & push사용 권장]
                */
               //5. Searching
               /* indexOf 배열내에 어디에 있나 index로 알려줌
                이와 비슷하게 last indexOf 는 맨 마지막으로 나온 배열의 순서 알려줌
               include 포함되어있나 알려줌
                */


