var obj = {
    name: "amit",
    fun: function () {
        console.log(this.name, age, gender)
    }
}
var obj2 = {
    name: "sumit"
}
//call part
obj.fun.call(obj2, 12, male);


//bind

function fun(age, gender) {
    console.log(this.fname, age, gender)
}

var obj1 = {
    fname: "amit",
}
var obj2 = {
    fname: "kenny"
}

fun.call(obj1, 12, male)


//apply part
fun.apply(obj1, [12, male])// this apply 

//bind part
//makes the whole thing to a fucntion..

var amit = obj1.fun.bind(obj2, 12, male);
console.log(amit)//fucntion