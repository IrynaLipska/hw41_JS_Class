'use strict';

let student = {
    name: 'Alina',
    city: 'Kyiv',
    course: 'front-end',
    sayHello(){
    alert(`hello ${this.name}`);
    }
}

let student2 = {
    name: 'Yarik',
    city: 'Paris',
    course: 'front-end',
    sayHello() {
    alert(`hello ${this.name}`);
    }
}

// student.sayHello();
// student2.sayHello();

// function Student(name, city, course) {
//     this.name = name;
//     this.city = city;
//     this.course = course;
//     this.sayHello = function() {
//     alert(`hello ${this.name}`);
// }
// }

// let student3 = new Student('Oleg', 'Kyiv', 'front-end');
// let student4 = new Student('Julia', 'Dnipro', 'front-end');
// let student5 = new Student('Sveta', 'Odessa', 'front-end');

// Class ===Function------------------------------------------------------

// gender, height, weight, color, age

class Student {
    constructor(name, city, course = 'front-end') {
    this.name = name;
    this.city = city;
    this.course = course;
    }
    sayHello() {
        alert(`hello ${this.name}`);
    }
}

// console.log(typeof Student);

// let student5 = new Student('Iryna', 'Zurih', 'back-end');

// console.log(student5);
// student5.sayHello();

// -----------Class Expression-------------------------------------------
//  make(марка), model, color, speed

let Car = class {
    constructor(make, model, color, speed) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.speed = speed;
    }

    maxSpeed() {
        console.log(`${this.speed * 2} km/h`);
    }

    get fullName() {
        return `${this.make} ${this.model}`;
    }

}

let carAudi = new Car('Audi', 'q8', 'grey', '240');

console.log(carAudi.fullName);

class Food {
    constructor(name, price, amount) {
        this.name = name;
        this._price = price;
        this.amount = amount;
    } 
    get Price() {
        return `${this._price.toFixed(1)}`;
    }
    set Price(newPrice) {
        if(newPrice <= 0) {
            console.log(`The price is not defined`);
        } else {
            this._price = newPrice
        }
    }
}

let sousage = new Food('sousage', 20.55, 10);

console.log(sousage);

