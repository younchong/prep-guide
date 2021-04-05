//JSON
//JavaScript Object Notation

//1. Object to JSON
let json = JSON.stringify(true);
 console.log(json);

 json= JSON.stringify(['apple', 'banana']);
 console.log(json);

 const rabbit = {
     name: 'tori',
     color: 'white',
     size: null,
     birthDate: new Date(),
     jump: () => {
         console.log(`${name} can jump!`);
     },
 };
 
 json = JSON.stringify(rabbit);
 console.log(json);

 json = JSON.stringify(rabbit, ['name', 'color', 'size']);
 console.log(json);

 json = JSON.stringify(rabbit, (key, value) => {
     console.log('key: ${key}, value: ${value}');
     return key ==='name' ? 'ellie' : value;
 });

 console.log(json);

 // 2.JSON to Object
 // parse(json)
 console.clear();
 json = JSON.stringify(rabbit);
 const obj = JSON.parse(json, (key, value) => {
     console.log(`key: ${key}, value: ${value}`);
     return key ==='birthDate' ? new Date(value) : value;
 });
 console.log(obj);

 console.log(rabbit.birthDate.getDate());
 console.log(obj.birthDate.getDate());
 //처음 위쪽에서는 string화 되어있었고 obj에서 변수값을 바꿔줌