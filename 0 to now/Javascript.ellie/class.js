'use strict';

//1. class declarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const ellie = new Person ('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);

//2. Getter and Setter
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
      /*
        if (value < 0){
           throw Error ( 'impossible');
       }
       */
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);

//3. Field (public, private)

//5. Inheritance
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

     draw(){
         console.log(`drwing ${this.color} color of`);
     }

     getArea() {
         return this.width * this.height;
     }
}

 class Rectangle extends Shape {}
  class Triangle extends Shape {
    getArea() {
        return this.width * this.height / 2;
    }
  }
 
  const rectangle = new Rectangle(20, 20, 'blue');
  rectangle.draw();
  console.log(rectangle.getArea());
  const triangle = new Triangle(20, 20, 'red');
  triangle.draw();
  console.log(triangle.getArea());