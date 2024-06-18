
//this is the class
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name}is here`)
    }
}
// to make it inheritance
class Dog extends Animal{
    constructor(name,breed){
        super(name);//inheritance from parnet animal
        this.breed=breed;

    }
    speak(){
        console.log(`${this.name} barks`);
    }
   
}
const rex =new Dog("rex","germanShepherd");
rex.speak()// rex barks
