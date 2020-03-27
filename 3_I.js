//Interface segregation principle

//Вариант без соблюдения принципа
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     walk() {
//         console.log(`${this.name}: могу ходить`)
//     }
//
//     swim() {
//         console.log(`${this.name}: могу плавать`)
//     }
//
//     fly() {
//         console.log(`${this.name}: могу летать`)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null
//     }
//
// }
//
// class Bird extends Animal {
//     swim() {
//         return null
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//
//     walk() {
//         return null
//     }
// }

// const dog = new Dog('Рэкс')
// dog.walk()
// dog.fly()
// dog.swim()
// console.log('=========')
//
// const eagle = new Bird('Орел')
// eagle.walk()
// eagle.fly()
// eagle.swim()
// console.log('=========')
//
// const blue = new Whale('Синий кит')
// blue.walk()
// blue.fly()
// blue.swim()

//А теперь с соблюдением принципа
//
//Будем использовать композицию
console.log('Соблюдение принципа')
class Animal {
    constructor(name) {
        this.name = name
    }
}

const walker = {
    walk(){
        console.log(`${this.name}: могу ходить`)
    }
}
const swimmer = {
    swim(){
        console.log(`${this.name}: могу плавать`)
    }
}
const flyer = {
    fly(){
        console.log(`${this.name}: могу летать`)
    }
}
function f() {

}
class Dog extends Animal {}
class Whale extends Animal{}
class Bird extends Animal{}

//Мы добавляем методы в зависимости от класса
//Как вариант лучше было использовать typescript
Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Whale.prototype, swimmer)
Object.assign(Bird.prototype, flyer, walker)

const dog = new Dog('Рэкс')
dog.swim()
dog.walk()
console.log('=========')

const eagle = new Bird('Орел')
eagle.walk()
eagle.fly()
console.log('=========')

const blue = new Whale('Синий кит')
blue.swim()
