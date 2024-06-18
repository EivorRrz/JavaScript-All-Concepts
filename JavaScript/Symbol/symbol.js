let sym =Symbol("amit")
console.log(sym.toString())//:amit output

//descrption

console.log(sym.description);

//they are unique so example 

let amit1 =Symbol("id");
let amit2 =Symbol("id");
console.log(amit1== amit2);//false


//example with object


let id = Symbol("amit");
let obj={
    name:"amit",
    [amit]:"good boy"
}

console.log(obj[amit])//good boy