//start with capital letter
function User(name) {
    this.name = name;

}
console.log(new User("Jack"))

function Cseb(nam) {// so in this constructor starts with capital letter and with new operator>>
    this.nam = nam;

}
console.log(new Cseb("vivek"));

//second way

function Secb(roll){
    if(!new.target){
        return this.roll=roll
    }
}
console.log(new Secb(21))
