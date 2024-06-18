class ANIMAL{
    #type;//this is private identifier

    constructor(name,type){
        this.name=name;
        this.#type=type;
    }
     speakType(){
        console.log();
     }
     speak(){
        this.#type();
        console.log();
     }
}
const german = new ANIMAL("rexxy","mammal");
german.speak();

//console/log(german.#type)//error this is private indetifer