
//proto
const parent={
    greet(){
        console.log("hello");
    }
};

console.log({

    __proto__: parent

});

child.greet();


//child.__proto__ is set to parent, 
//which means child inherits the greet method from parent.

//prototype(constuctor fucntion with new keyword that set to proto property)


//constructor>>
function Person(name){
    this.name=name;
}
//fucntion with constructor and proto
Person.prototype.greet=function(){
    console.log("hello"+this.name);
}
//call in total with variable,
const amit = new Person("amit");
amit.greet();
