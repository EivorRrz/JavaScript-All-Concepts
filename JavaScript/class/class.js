//to managet the inheritance we use the class

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello my name is ${this.name},and the age is${this.age}`)

    }

}
const amit = new Person("amit",12);
