//Open Close Principle

//Создаем класс за счет которого мы можем расширять - производить любые формы
//с уже всключенным методом расчета площади
class Shape {
    area() {
        throw Error('method area() should be implemented')
    }
}
//в конкретных формах нужно прописать конкретные свойства и метод расчета
class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}
class Triangle extends Shape{
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }
    area() {
        return (this.a * this.b) / 2
    }
}
//в классе расчета мы принимаем массив классов
//где мы суммируем результаты расчета каждой формы
//сам метод изменять уже не нужно
//только добавить вызов новой формы
class AreaCalc {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calc = new AreaCalc([
    new Square(4),
    new Circle(5),
    new Rect(2,4),
    new Triangle(3,5)
])
console.log(calc.sum())
