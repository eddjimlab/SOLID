//Liskov Substitution Principle

//говорит о том, что нужно корректно выбирать слои абстракции
//ошибкой было бы например человеку сразу дать доступ как сотруднику

//создаем первый слой абстракции грубо человек или нет
class Person {
  homo(){
      console.log('Человек')
      debugger
  }
}

//создаем второй слой сотрудник или нет
class Member extends Person{
    access() {
        this.homo()
        console.log('Доступ разрешен')
        this.code()
    }
}

//класс гостя
class Guest extends Person{
    access(){
        console.log('У вас нет доступа')
    }
}
//теперь конктретезируем человек, сотрудник, фронтендер
class Frontender extends Member{
    code() {
        console.log('make frontend')
    }
}
class Backend extends Member{
    code(){console.log('make backend')}
}

//а здесь человек, гость
class ExternalFrontender extends Guest{
    access() {
        this.homo()
        console.log('У тебя нет доступа')
    }
}

function letGo(member) {
    member.access()
}

// const Peter = new Frontender()
// console.log(letGo(Peter))
console.log(letGo(new Frontender()))
console.log(letGo(new Backend()))
console.log(letGo(new ExternalFrontender()))
